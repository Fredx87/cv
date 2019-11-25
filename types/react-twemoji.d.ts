declare module "react-twemoji" {
  export interface TwemojiParseOptions {
    callback?: Function;
    attributes?: Function;
    base?: string;
    ext?: string;
    size?: string | number;
    folder?: string;
  }

  export interface TwemojiProps {
    options: TwemojiParseOptions;
    children: React.ReactNode;
  }

  export default function Twemoji(props: TwemojiProps): JSX.Element;
}
