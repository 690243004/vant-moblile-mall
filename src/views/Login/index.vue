<template>
  <div class="login-page">
    <div class="header-area">
      <van-image :src="gkdImg" round />
      <div>GKD 商城</div>
    </div>

    <div class="input-arae">
      <van-cell-group>
        <van-field
          v-model="username"
          type="tel"
          label="手机号"
          clearable
          placeholder="随便输"
        >
          <i class="iconfont icon-tubiao_zhanghao" slot="left-icon"></i>
        </van-field>
        <van-field
          v-model="password"
          label="密码"
          type="password"
          clearable
          placeholder="随便输"
        >
          <i class="iconfont icon-mima" slot="left-icon"></i>
        </van-field>
      </van-cell-group>
    </div>

    <div class="action-area">
      <div
        @click="onLogin"
        class="login-btn"
        :style="{ background: themeColor }"
      >
        登录
      </div>
      <div class="extra-link">
        <a>忘记密码</a>
        <div class="divider" />
        <a>免费注册</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Image, Field, CellGroup, Toast } from "vant";
import gkdImg from "@/assets/images/_20200224114153.jpg";
import store from "@/store";
export default {
  data() {
    return {
      gkdImg,
      username: "",
      password: ""
    };
  },
  components: {
    [Image.name]: Image,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  },
  methods: {
    onLogin() {
      if (this.username === "") {
        return Toast("账号是必须的", {
          position: "bottom"
        });
      }
      if (this.password === "") {
        return Toast("密码是必须的");
      }
      store.dispatch("updateLoginState", true);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;

  .header-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    .van-image {
      height: 100px;
      width: 100px;
      margin-top: 15vw;
    }
    div {
      margin-top: 10px;
      color: #999;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .input-arae {
    margin-top: 10vw;
    padding: 0 10px;
    box-sizing: border-box;
    i {
      font-size: 28px;
    }
    .icon-tubiao_zhanghao {
      font-size: 25px;
    }
  }

  .action-area {
    margin-top: 10vw;
    padding: 0 10px;
    box-sizing: border-box;
    .login-btn {
      text-align: center;
      line-height: 40px;
      height: 40px;
      color: #fff;
    }

    .extra-link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5vw;
      .divider {
        height: 20px;
        width: 1px;
        background: #999;
        transform: scale(0.5);
        margin: 0 10px;
      }
      a {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
