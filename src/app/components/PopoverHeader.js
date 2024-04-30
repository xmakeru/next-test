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
            <ul>
                <li>
                    1
                </li>
                <li>
                    22
                </li>
                <li>
                    333
                </li>
                <li>
                    4444
                </li>
            </ul>
        </div>
    </Popover.Panel>
</Popover>
</>
    )
}
