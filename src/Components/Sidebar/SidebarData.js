import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import QuizIcon from '@mui/icons-material/Quiz';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import AddIcon from '@mui/icons-material/Add';
export const SidebarData = [
    {
        title:"Add project",
        icon:<AddIcon />,
        link:"/create"

    },
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/home"

    },
    {
        title:"Showcase",
        icon:<BorderAllIcon />,
        link:"/showcase"

    },
    {
        title:"Project ideas",
        icon:<LightbulbIcon />,
        link:"/ideas"

    },
    {
        title:"Enrolled",
        icon:<FormatListBulletedIcon />,
        link:"/enrolled"

    },
    {
        title:"FAQs",
        icon:<QuizIcon />,
        link:"/faqs"

    },
  
]
