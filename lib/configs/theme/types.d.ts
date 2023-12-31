export declare type LinkLineType = 'line' | 'curve' | 'round';
export declare type LinkStyle = {
    lineType?: string;
    hasUnderline?: boolean;
    lineWidth?: string;
    lineColor?: string;
    lineRadius?: number;
};
export declare type TopicContentStyle = {
    [key: string]: any;
    background?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    border?: string;
    borderRadius?: string;
    borderWidth?: string;
    borderStyle?: string;
    borderColor?: string;
    padding?: string;
};
export declare type TopicStyle = {
    contentStyle?: TopicContentStyle;
    linkStyle?: LinkStyle;
    subLinkStyle?: LinkStyle;
};
export declare type ThemeType = {
    name: string;
    background: string;
    highlightColor: string;
    randomColor?: boolean;
    marginH: number;
    marginV: number;
    contentStyle?: TopicContentStyle;
    linkStyle?: LinkStyle;
    rootTopic?: TopicStyle;
    primaryTopic?: TopicStyle;
    normalTopic?: TopicStyle;
};
export declare function isThemeType(obj: any): boolean;
export interface Themes {
    [fieldName: string]: ThemeType;
}
//# sourceMappingURL=types.d.ts.map