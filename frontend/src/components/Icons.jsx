// Icon giao diện: Heroicons (MIT, © Tailwind Labs) — kiểu nét đặc 20px
import { useId } from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
  CheckIcon as HeroCheck,
  ChevronDownIcon,
  ChevronRightIcon as HeroChevronRight,
  GlobeAltIcon,
  LinkIcon as HeroLink,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const sized = (Icon, size) => (p) => <Icon width={size} height={size} aria-hidden="true" {...p} />;

export const SearchIcon = sized(MagnifyingGlassIcon, 20);
export const ChevronDown = sized(ChevronDownIcon, 20);
export const ChevronRight = sized(HeroChevronRight, 16);
export const ChevronLeft = sized(ArrowLeftIcon, 20);
export const ArrowRight = sized(ArrowRightIcon, 20);
export const ArrowLeft = sized(ArrowLeftIcon, 20);
export const CloseIcon = sized(XMarkIcon, 20);
export const CheckIcon = sized(HeroCheck, 14);
export const LinkIcon = sized(HeroLink, 20);
export const GlobeIcon = sized(GlobeAltIcon, 20);
export const MenuIcon = sized(Bars3Icon, 22);

// Ngôi sao (đường viền từ Heroicons "star"), hỗ trợ đầy / nửa / rỗng
const STAR_PATH =
  'M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z';

export function Star({ type = 'full', size = 14 }) {
  const id = `star-half-${useId().replace(/:/g, '')}`;
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} aria-hidden="true" className="star">
      {type === 'half' && (
        <defs>
          <clipPath id={id}>
            <rect x="0" y="0" width="10" height="20" />
          </clipPath>
        </defs>
      )}
      {type === 'full' ? (
        <path d={STAR_PATH} fill="currentColor" />
      ) : (
        <>
          <path d={STAR_PATH} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          {type === 'half' && <path d={STAR_PATH} fill="currentColor" clipPath={`url(#${id})`} />}
        </>
      )}
    </svg>
  );
}

export function Stars({ value, size = 14 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="stars" aria-label={`${value} trên 5 sao`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} type={i < full ? 'full' : i === full && half ? 'half' : 'empty'} />
      ))}
    </span>
  );
}

// Biểu tượng thương hiệu AutoFlow AI: khung chat có tia sét
function BrandGlyph({ size, color, stroke = 1.8 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        d="M6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3.5V16h-1A2.5 2.5 0 0 1 4 13.5v-7A2.5 2.5 0 0 1 6.5 4Z"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path d="M12.9 6.4 8.9 11.3h2.8l-.7 3.3 4-4.9h-2.8l.7-3.3Z" fill={color} />
    </svg>
  );
}

// variant="app": ô bo góc nền gradient, hình nét trắng (icon ứng dụng)
// variant="mono": chỉ hình vẽ một màu, không nền (logo header / footer)
export function BrandMark({ size = 32, radius = 8, variant = 'app' }) {
  if (variant === 'mono') return <BrandGlyph size={size} color="currentColor" stroke={2} />;
  return (
    <span className="brand-mark" style={{ width: size, height: size, borderRadius: radius }}>
      <BrandGlyph size={size * 0.66} color="#fff" stroke={size >= 40 ? 1.7 : 2} />
    </span>
  );
}

export const YoutubeLogo = () => (
  <svg viewBox="0 0 28 20" width="28" height="20" aria-hidden="true">
    <rect width="28" height="20" rx="5" fill="#fff" />
    <path d="M11 6v8l7-4z" fill="#282828" />
  </svg>
);
