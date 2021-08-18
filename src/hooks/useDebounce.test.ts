import { renderHook, act } from "@testing-library/react-hooks";
import useDebounce from "./useDebounce";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});
describe("should return value when recall useDebounce after 1/2 second", () => {
  test("assert init value will be assigned", () => {
    const { result } = renderHook((value) => useDebounce(value, 2000), {
      initialProps: "init",
    });
    expect(result.current).toEqual("init");
  });
  test("should return a value when recall the hook after 1 second", async () => {
    const { result, rerender } = renderHook(
      (value) => useDebounce(value, 1000),
      {
        initialProps: "init",
      }
    );

    // call the hook with new props argument (recalling useDebounce)
    rerender("abc");
    // the debounced value isn't updated yet
    expect(result.current).toEqual("init");

    // wait 1 second until rerender("abc") return "abc"
    // await new Promise((r) => setTimeout(r, 1000));
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // check the new returned value
    expect(result.current).toEqual("abc");
  });
});
