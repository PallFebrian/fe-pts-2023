export const logger = (state) => {
    return (next) => {
      return (action) => {
        console.log('Logger redux =>', action);
      };
    };
  };