import React, { ReactNode } from "react";
import { View } from "react-native";

import Svg, { Circle, Defs, Path, ClipPath, Use, G } from "react-native-svg";
import theme, { Box } from "../../components/Theme";
interface SocialLoginProps {}
const SIZE = theme.borderRadii.l * 2;

const Apple = () => {
  return (
    <Svg viewBox="0 0 25 30" fill="black">
      <Path d="M15.949 23.876c-.733 0-1.386-.248-2.015-.484-.539-.205-1.047-.397-1.529-.397-.428 0-.916.183-1.433.375-.625.231-1.333.496-2.102.496-1.264 0-2.397-.724-3.469-2.209-.045-.063-4.409-6.472-2.289-11.231C4.273 7.82 5.946 6.497 8.084 6.497c1.128 0 2.169.354 3.005.639.468.159.91.309 1.143.309.275 0 .717-.161 1.182-.334.776-.285 1.744-.642 2.854-.642 1.609 0 3.065.743 4.453 2.271a.506.506 0 01.127.387.509.509 0 01-.203.353c-1.463 1.066-2.205 2.299-2.205 3.666 0 1.693.836 2.937 2.791 4.154a.497.497 0 01.192.628c-1.838 4.112-3.526 5.948-5.474 5.948zM12.279 6.211c-.12 0-.241-.008-.36-.022a.497.497 0 01-.438-.477c-.132-3.346 2.704-5.395 4.8-5.585a.505.505 0 01.539.409c.231 1.288-.201 2.704-1.188 3.884-.938 1.122-2.192 1.791-3.353 1.791z" />
    </Svg>
  );
};

const Facebook = () => {
  return (
    <Svg viewBox="0 0 32 32">
      <Path
        fill="#FFF"
        d="M16 31.25C7.591 31.25.75 24.409.75 16 .75 7.591 7.591.75 16 .75 24.409.75 31.25 7.591 31.25 16c0 8.409-6.841 15.25-15.25 15.25z"
      />
      <Path
        fill="#E8E8E8"
        d="M16 1.5c7.995 0 14.5 6.505 14.5 14.5S23.995 30.5 16 30.5 1.5 23.995 1.5 16 8.005 1.5 16 1.5M16 0C7.163 0 0 7.163 0 16c0 8.836 7.163 16 16 16s16-7.164 16-16c0-8.837-7.163-16-16-16z"
      />
      <Path
        fill="#333"
        d="M13.69 24.903h3.679v-8.904h2.454l.325-3.068h-2.779l.004-1.536c0-.8.076-1.229 1.224-1.229h1.534V7.097h-2.455c-2.949 0-3.986 1.489-3.986 3.992v1.842h-1.838V16h1.838v8.903z"
      />
    </Svg>
  );
};

const Google = () => {
  return (
    <Svg viewBox="-380.2 274.7 65.7 65.8">
      <Circle cx={-347.3} cy={307.6} r={32.9} fill="#e0e0e0" />
      <Circle cx={-347.3} cy={307.1} r={32.4} fill="#fff" />
      <Defs>
        <Path
          id="prefix__a"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </Defs>
      <ClipPath id="prefix__b">
        <Use xlinkHref="#prefix__a" overflow="visible" />
      </ClipPath>
      <Path
        d="M-370.8 320.3v-26l17 13z"
        clipPath="url(#prefix__b)"
        fill="#fbbc05"
      />
      <Defs>
        <Path
          id="prefix__c"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </Defs>
      <ClipPath id="prefix__d">
        <Use xlinkHref="#prefix__c" overflow="visible" />
      </ClipPath>
      <Path
        d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z"
        clipPath="url(#prefix__d)"
        fill="#ea4335"
      />
      <Defs>
        <Path
          id="prefix__e"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </Defs>
      <ClipPath id="prefix__f">
        <Use xlinkHref="#prefix__e" overflow="visible" />
      </ClipPath>
      <Path
        d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z"
        clipPath="url(#prefix__f)"
        fill="#34a853"
      />
      <G>
        <Defs>
          <Path
            id="prefix__g"
            d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </Defs>
        <ClipPath id="prefix__h">
          <Use xlinkHref="#prefix__g" overflow="visible" />
        </ClipPath>
        <Path
          d="M-322.8 331.3l-31-24-4-3 35-10z"
          clipPath="url(#prefix__h)"
          fill="#4285f4"
        />
      </G>
    </Svg>
  );
};
interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
    >
      {children}
    </Box>
  );
};

const SocialLogin = ({}: SocialLoginProps) => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
