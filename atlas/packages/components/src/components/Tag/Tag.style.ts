import { css } from "@emotion/core"
import { colors, typography } from "./../../theme"

export type TagStyleProps = {
  color?: string
}

export let makeStyles = ({
  color = colors.grey.base
}: TagStyleProps) => {
  return {
    container: css`
      display: inline-block;
      font-family: ${typography.fonts.base};
      border: 1px solid ${color};
      border-radius: 4px;
      padding: 5px 10px;
      color: ${color};
      cursor: default;
      vertical-align: middle;
    `,
    icon: css`
      & > path:nth-of-type(1) {
        color: inherit;
        flex-shrink: 0;
      }
    `,
  }
}
