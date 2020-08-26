import React, { ReactNode } from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  neq,
  not,
  set,
  startClock,
  stopClock,
  useCode,
} from "react-native-reanimated";
import { useClock, useTapGestureHandler, useValue } from "react-native-redash";

interface BorderlessTapProps {
  children: ReactNode;
  onPress: () => void;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
  const { gestureHandler, state } = useTapGestureHandler();
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);

  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [stopClock(clock), call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
