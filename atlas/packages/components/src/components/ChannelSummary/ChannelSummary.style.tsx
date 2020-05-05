import { css } from "@emotion/core"
import { spacing, colors, typography } from "../../theme"

export type ChannelSummaryStyleProps = {
  size?: "small" | "default" | "large"
}

export let makeStyles = ({
  size = "default"
}: ChannelSummaryStyleProps) => {

  let gridSize =
    size === "small"
      ? spacing.s9
      : size === "default"
      ? spacing.s19
      : spacing.s25;

  return {
    container: css`
      display: grid;
      grid-template: auto / ${gridSize};
      margin: 30px 0;
    `,
    avatar: css`
      grid-column: 1 / 1;
      cursor: pointer;
    `,
    details: css`
      grid-column: 2 / 2;
      flex-direction: column;
      margin: 0 0 0 ${spacing.s4};
      & > a {
        text-decoration: none;
      }
    `,
    title: css`
      color: ${colors.text.accent};
      margin: ${spacing.s3} 0;
      display: inline-block;
      cursor: pointer;
    `,
    badges: css`
      text-transform: uppercase;
      font-size: ${typography.sizes.small};
      & > *:not(last-child) {
        margin-right: ${spacing.s2};
      }
    `,
    tagSuccess: css`
      color: ${colors.other.success}
    `,
    tagInfo: css`
      color: ${colors.other.info}
    `
  }
}
