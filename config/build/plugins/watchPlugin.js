export const watchPlugin = {
    name: "watchPlugin",
    setup(build) {
      build.onStart(() => {
        console.log(`Build starting: ${new Date(Date.now()).toLocaleString()}`);
      });
      build.onEnd((result) => {
        if (result.errors.length > 0) {
          console.log(
            `Build finished with errors: ${new Date(Date.now()).toLocaleString()}`
          );
        } else {
          console.log(
            `Build finished successfully: ${new Date(
              Date.now()
            ).toLocaleString()}`
          );
        }
      });
    },
  };