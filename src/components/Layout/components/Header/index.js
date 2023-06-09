import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faSignIn,
    faEllipsisVertical,
    faEarthAfrica,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/icons';
import Image from '~/components/image';
import Search from '../Search';
// import { AccountItem } from '~/components/Layout/components/AccountItem'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':
                break;
            default:
        }
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@lien',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok logo" />

                <Search/>

                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} offset={[12, 8]} content='Upload video' placement='bottom-end'>
                            <button className={cx('action-btn')}>
                                <UploadIcon/>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} offset={[12, 8]} content='Message' placement='bottom-end'>
                            <button className={cx('action-btn')}>
                                <MessageIcon/>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} offset={[12, 8]} content='Inbox' placement='bottom-end'>
                        <button className={cx('action-btn')}>
                                <InboxIcon/>
                            </button>
                        </Tippy>
                    </>
                ): (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>

                       
                    </>
                )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image 
                                    src={'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/351307858_1050541895930037_7383037931059785246_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K4VkuOV6Wd8AX-bya6D&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAmfxBd8rnVKiUWr2d8KsHfCqnXI72fE9JBqW86sNG7ag&oe=64888696'} 
                                    alt='Nguyen Van A' 
                                    className={cx('user-avatar')}
                                    fallback = ''
                                />
                            ):(
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                            
                        </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
