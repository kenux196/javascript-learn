function runner() {
  try {
    console.log("Hello");
    throw new Error("문제 발생");
    console.log("Code Factory");
  } catch (error) {
    console.log("---- catch -----");
    console.log(error);
  } finally {
    console.log("----finally-----");
  }
}

runner();
