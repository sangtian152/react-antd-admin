import React from "react";
import { connect } from "react-redux";
import { Tooltip } from "antd";
import { SettingOutlined } from "@ant-design/icons"
import { toggleSettingPanel } from '@/store/modules/app'
import "./index.scss";
const Settings = (props) => {
    const { dispatch } = props
    const _toggleSettingPanel = () => {
        dispatch(toggleSettingPanel())
    }
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <SettingOutlined onClick={_toggleSettingPanel} />
      </Tooltip>
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
      ...state.app,
    };
};
export default connect(mapStateToProps)(Settings);
