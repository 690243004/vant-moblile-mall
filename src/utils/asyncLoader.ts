import Spinner from "@c/Spinner/index.vue";

// 输入一个块路径
export default (chunkPath: string) => {
  const asyncHandler = () => ({
    component: new Promise(resolve => {
      setTimeout(() => {
        resolve(import("../views/" + chunkPath));
      }, 1000);
    }),
    loading: Spinner,
    error: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(h: any) {
        return h("div", {}, ["异步组件加载失败"]);
      }
    },
    timeout: 10000
  });
  return () =>
    Promise.resolve({
      functional: true,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(h: any, { data, children }: any) {
        return h(asyncHandler, data, children);
      }
    });
};
