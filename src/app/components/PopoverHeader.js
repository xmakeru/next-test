import {Popover} from '@headlessui/react';
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function PopoverHeader() {
    return (
    <>
    <Popover className='relative'>
    <Popover.Button>
        <span className='sr-only'>Open menu</span>
        <Bars3BottomRightIcon className="h-10 w-10 text-black-500 transition ui-open:rotate-180" />
    </Popover.Button>
        
    <Popover.Panel className='absolute z-10 bg-white w-screen shadow-md'>
        <div className='bg-color-yellow-100'>
            <ul className='bg-slate-600 text-white p-6'>
                <li>
                    1111
                </li>
                <li>
                    2222
                </li>
                <li>
                    3333
                </li>
            </ul>
        </div>
    </Popover.Panel>
</Popover>
</>
    )
}
