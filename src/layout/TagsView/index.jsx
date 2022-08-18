import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Tag } from "antd";
import withRouter from "@/router/withRouter";
import {
  deleteTag,
  emptyTaglist,
  closeOtherTags,
} from "@/store/modules/tagsView";
import "./index.scss"
class TagList extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      left: 0,
      top: 0,
      menuVisible: false,
    };
  }
  tagListContainer = React.createRef();
  contextMenuContainer = React.createRef();

  handleClose = (tag) => {
    const { location, navigate, deleteTag, taglist } = this.props;
    const path = tag.path;
    const currentPath = location.pathname;
    const length = taglist.length;
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      navigate(taglist[length - 1].path);
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (
      path === taglist[length - 1].path &&
      currentPath === taglist[length - 1].path
    ) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        navigate(taglist[length - 2].path);
      } else if (length === 2) {
        navigate(taglist[0].path);
      }
    }

    // 先跳转路由，再修改state树的taglist
    deleteTag(tag);
  };
  handleClick = (path) => {
    this.props.navigate(path);
  };
  openContextMenu = (tag, event) => {
    event.preventDefault();
    const menuMinWidth = 105;
    const clickX = event.clientX;
    const clickY = event.clientY; //事件发生时鼠标的Y坐标
    const clientWidth = this.tagListContainer.current.clientWidth; // container width
    const maxLeft = clientWidth - menuMinWidth; // left boundary

    // 当鼠标点击位置大于左侧边界时，说明鼠标点击的位置偏右，将菜单放在左边
    if (clickX > maxLeft) {
      this.setState({
        left: clickX - menuMinWidth + 15,
        top: clickY,
        menuVisible: true,
        currentTag: tag,
      });
    } else {
      // 反之，当鼠标点击的位置偏左，将菜单放在右边
      this.setState({
        left: clickX,
        top: clickY,
        menuVisible: true,
        currentTag: tag,
      });
    }
  };
  handleClickOutside = (event) => {
    const { menuVisible } = this.state;
    const isOutside = !(
      this.contextMenuContainer.current &&
      this.contextMenuContainer.current.contains(event.target)
    );
    if (isOutside && menuVisible) {
      this.closeContextMenu();
    }
  };
  closeContextMenu() {
    this.setState({
      menuVisible: false,
    });
  }
  componentDidMount() {
    document.body.addEventListener("click", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleClickOutside);
  }
  handleCloseAllTags = () => {
    this.props.emptyTaglist();
    this.props.navigate("/dashboard");
    this.closeContextMenu();
  };
  handleCloseOtherTags = () => {
    const currentTag = this.state.currentTag;
    const { path } = currentTag;
    this.props.closeOtherTags(currentTag);
    this.props.navigate(path);
    this.closeContextMenu();
  };
  render() {
    const { left, top, menuVisible } = this.state;
    const { taglist, location } = this.props;
    const currentPath = location.pathname;
    return (
      <div className="tagsView-container">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          hideTracksWhenNotNeeded={true}
          renderView={(props) => (
            <div {...props} className="scrollbar-container" />
          )}
          renderTrackVertical={(props) => (
            <div {...props} className="scrollbar-track-vertical" />
          )}
        >
          <ul className="tags-wrap" ref={this.tagListContainer}>
            {taglist.map((tag) => (
              <li key={tag.path}>
                <Tag
                  onClose={this.handleClose.bind(null, tag)}
                  closable={!tag.affix}
                  color={currentPath === tag.path ? "geekblue" : "gold"}
                  onClick={this.handleClick.bind(null, tag.path)}
                  onContextMenu={this.openContextMenu.bind(null, tag)}
                >
                  {tag.title}
                </Tag>
              </li>
            ))}
          </ul>
        </Scrollbars>
        {menuVisible ? (
          <ul
            className="contextmenu"
            style={{ left: `${left}px`, top: `${top}px` }}
            ref={this.contextMenuContainer}
          >
            <li onClick={this.handleCloseOtherTags}>关闭其他</li>
            <li onClick={this.handleCloseAllTags}>关闭所有</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default withRouter(
  connect((state) => state.tagsView, {
    deleteTag,
    emptyTaglist,
    closeOtherTags,
  })(TagList)
);
