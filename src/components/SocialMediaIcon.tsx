import { Link, Image, useColorModeValue } from "@chakra-ui/react";
interface SocialMediaIconProps {
  label?: string;
  blackImg: string;
  whiteImg: string;
  href: string;
}
function changeImage(e: React.MouseEvent<HTMLImageElement>, blackImg: string, whiteImg: string) {
  if (e.currentTarget.src === blackImg) {
    e.currentTarget.src = whiteImg;
  } else {
    e.currentTarget.src = blackImg;
  }
}

export default function SocialMediaIcon(props: SocialMediaIconProps) {
  return (<Link width={24} height={24} p={2} href={props.href} isExternal>
    <Image src={useColorModeValue(props.blackImg, props.whiteImg)} onMouseOver={(e) => changeImage(e, props.whiteImg, props.blackImg)} onMouseOut={(e) => changeImage(e, props.whiteImg, props.blackImg)} />
  </Link>)
}