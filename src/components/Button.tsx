import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from '../data/hotel';
export function Button({children, secondary=false, href=BOOKING_URL}:{children:ReactNode,secondary?:boolean,href?:string}) { return <a href={href} className={`button ${secondary ? 'secondary' : ''}`}>{children}<ArrowUpRight size={15}/></a> }
