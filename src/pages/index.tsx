import { Calendar, Badge } from 'antd';
import './index.less';
import locale from 'antd/lib/calendar/locale/zh_CN.js';

function getListData(value: any) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'warning', content: 'This is warning event' },
                {
                    type: 'success',
                    content: 'This is very long usual event。。....',
                },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                {
                    type: 'success',
                    content: 'This is very long usual event。。....',
                },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ];
            break;
        default:
    }
    return listData || [];
}

function dateCellRender(value: any) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {listData.map((item) => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
}

function getMonthData(value: any) {}

function monthCellRender(value: any) {
    return null;
}

export default function IndexPage() {
    return (
        <div className="root">
            <div
                style={{
                    maxWidth: 1280,
                }}
            >
                <Calendar dateCellRender={dateCellRender} locale={locale} />
            </div>
        </div>
    );
}
