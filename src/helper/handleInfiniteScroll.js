export const handleInfiniteScroll = async (setPageNumber) => {
  try {
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    if (innerHeight + scrollTop > scrollHeight - 1) {
      setPageNumber((prev) => prev + 1);
    }
  } catch (e) {
    console.log(e);
  }
};
