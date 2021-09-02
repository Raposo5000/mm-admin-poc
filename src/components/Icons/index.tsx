import { memo } from "react";
import { MdVisibility, MdVisibilityOff, MdAccountCircle, MdDashboard, } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdLogIn, IoMdClose } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";

interface IconProps {
  size?: number;
  color?: string;
}

export const VisibilityIcon = memo(({ size, color }: IconProps) => (
  <MdVisibility size={size} color={color}/>
));
export const VisibilityOffIcon = memo(({ size, color }: IconProps) => (
  <MdVisibilityOff size={size} color={color}/>
));
export const LockPasswordIcon = memo(({ size, color }: IconProps) => (
  <RiLockPasswordFill size={size} color={color}/>
));

export const AccountIcon = memo(({ size, color }: IconProps) => (
  <MdAccountCircle size={size} color={color}/>
));

export const LoginIcon = memo(({ size, color }: IconProps) => (
  <IoMdLogIn size={size} color={color}/>
));

export const DashboardIcon = memo(({ size, color }: IconProps) => (
  <MdDashboard size={size} color={color}/>
));

export const CloseIcon = memo(({ size, color }: IconProps) => (
  <IoMdClose size={size} color={color}/>
));

export const HamburgerIcon = memo(({ size, color }: IconProps) => (
  <FaHamburger size={size} color={color}/>
));