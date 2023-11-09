import createStore from "@/store-creator";
import { ElementPosition, InitialElementPosition } from "@/types";
import { clone } from "ramda";

type AppLayoutMeasureState = {
  titleBar: ElementPosition;
  content: ElementPosition;
};

const useAppLayoutMeasure = createStore<AppLayoutMeasureState>(() => ({
  titleBar: clone(InitialElementPosition),
  content: clone(InitialElementPosition),
}));

export default useAppLayoutMeasure;
