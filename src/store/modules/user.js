import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getToken, setToken } from "@/utils/auth"
import { reqUserInfo } from "@/api/user";
// 获取用户信息
export const getUserInfo = createAsyncThunk("user/getUserInfo", async (params, thunkAPI) => {
    try {
        const { token } = params
        return new Promise((resolve, reject) => {
            reqUserInfo(token)
            .then((response) => {
                const { data } = response;
                if (data.status === 0) {
                    resolve(data);
                } else {
                    const msg = data.message;
                    reject(msg);
                }
            })
            .catch((error) => {
            reject(error);
            });
        })
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMsg: error.message });
    }
  });

// 登录
export const login = createAsyncThunk(
    "user/login",
    async (params, thunkAPI) => {
      try {
        console.log(params, "login");
        const token = "token"
        setToken(token)
        return {
            token,
        };
      } catch (error) {
        return thunkAPI.rejectWithValue({ errorMsg: error.message });
      }
    }
  );
// 退出登录
export const logout = createAsyncThunk(
  "user/logout",
  async (params, thunkAPI) => {
    try {
      console.log(params, "logout");
      return {};
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMsg: error.message });
    }
  }
);
export const slice = createSlice({
    name: "user",
    initialState: {
        name: "",
        role: "",
        avatar:"",
        token: getToken(),
    },
    reducers: {
        setUserToken(state, action) {
            state.token = action.payload.token;
        },
        setUserInfo(state, action) {
            state.name = action.payload.name;
            state.role = action.payload.role;
            state.avatar = action.payload.avatar;
        },
        resetUser(state) {
            state.token = "";
            state.name = "";
            state.role = "";
            state.avatar = "";
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = 'pending';
        });
        // 接口请求返回
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.loading = 'fulfilled';
            // 这里处理数据
            state.token = payload.token;
            console.log(payload)
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = 'failure';
        });
        builder.addCase(logout.pending, (state, action) => {
          state.loading = 'pending';
        });
        // 接口请求返回
        builder.addCase(logout.fulfilled, (state, action) => {
            console.log(action)
            state.loading = 'fulfilled';
            // 这里处理数据
            state.token = "";
        });
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = 'failure';
        });
        builder.addCase(getUserInfo.pending, (state, action) => {
          state.loading = 'pending';
        });
        // 接口请求返回
        builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
          state.loading = 'fulfilled';
          // 这里处理数据
          state.name = payload.name;
        });
        builder.addCase(getUserInfo.rejected, (state, action) => {
          state.loading = 'failure';
        });
    },
})

export const { setUserToken, setUserInfo, resetUser } = slice.actions
export default slice.reducer