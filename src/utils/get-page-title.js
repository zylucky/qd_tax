import defaultSetting from '@/settings'

const title = defaultSetting.title || '税务'

export default function getPageTitle(pageTitle){
    if(pageTitle){
        return  `${pageTitle} - ${title}`
    }
    return `${title}`
}