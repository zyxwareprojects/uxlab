/**
 * ZyxwareLogo — single source of truth for the corporate signature.
 *
 * Per Zyxware Brand Guidelines v2.0 (page 9, "The General Logo"):
 *  - Light backgrounds: full violet logo on white
 *  - Dark backgrounds:  same signature in white
 *
 * The brand-correct asset is /brand/zyxware-logo-light.png (Z-Circle +
 * ZYXWARE TECHNOLOGIES wordmark in Vivid Violet #9335AA + Dim Gray #666666).
 *
 * The accompanying /brand/zyxware-logo-dark.png file ships broken (missing
 * wordmark, wrong color), so this component does NOT reference it. Instead,
 * for dark theme we invert the light PNG via CSS filter to produce a pure
 * white silhouette of the full signature — brand-faithful on dark backgrounds.
 */

import { useTheme } from "@/state/ThemeContext";

interface ZyxwareLogoProps {
    /** Tailwind classes for sizing — defaults to brand minimum visible signature size. */
    className?: string;
    /** Override aria-label / alt if needed. */
    alt?: string;
}

export const ZyxwareLogo = ({
    className = "h-9 md:h-10 w-auto",
    alt = "Zyxware Technologies",
}: ZyxwareLogoProps) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="flex items-center select-none">
            <img
                src="/brand/zyxware-logo-light.png"
                alt={alt}
                className={className}
                draggable={false}
                style={
                    isDark
                        ? { filter: "brightness(0) invert(1)" }
                        : undefined
                }
            />
        </div>
    );
};
