import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.tiktok.com/@fine.works5' className="cs-center">
        <Icon icon="fa6-brands:tiktok" />
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:facebook" />               
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />              
      </Link>
      <Link href='https://wa.me/+923206316386' className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />
      </Link>
    </Div>
  )
}
