import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Day {
    date: string;
    isCurrentMonth?: boolean;
    isToday?: boolean;
    isSelected?: boolean;
}
const days: Day[] = [
    { date: "2021-12-27" },
    { date: "2021-12-28" },
    { date: "2021-12-29" },
    { date: "2021-12-30" },
    { date: "2021-12-31" },
    { date: "2022-01-01", isCurrentMonth: true },
    { date: "2022-01-02", isCurrentMonth: true },
    { date: "2022-01-03", isCurrentMonth: true },
    { date: "2022-01-04", isCurrentMonth: true },
    { date: "2022-01-05", isCurrentMonth: true },
    { date: "2022-01-06", isCurrentMonth: true },
    { date: "2022-01-07", isCurrentMonth: true },
    { date: "2022-01-08", isCurrentMonth: true },
    { date: "2022-01-09", isCurrentMonth: true },
    { date: "2022-01-10", isCurrentMonth: true },
    { date: "2022-01-11", isCurrentMonth: true },
    { date: "2022-01-12", isCurrentMonth: true, isToday: true },
    { date: "2022-01-13", isCurrentMonth: true },
    { date: "2022-01-14", isCurrentMonth: true },
    { date: "2022-01-15", isCurrentMonth: true },
    { date: "2022-01-16", isCurrentMonth: true },
    { date: "2022-01-17", isCurrentMonth: true },
    { date: "2022-01-18", isCurrentMonth: true },
    { date: "2022-01-19", isCurrentMonth: true },
    { date: "2022-01-20", isCurrentMonth: true },
    { date: "2022-01-21", isCurrentMonth: true, isToday: true, isSelected: true },
    { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-23", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-24", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-25", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-26", isCurrentMonth: true, isSelected: true },
    { date: "2022-01-27", isCurrentMonth: true },
    { date: "2022-01-28", isCurrentMonth: true },
    { date: "2022-01-29", isCurrentMonth: true },
    { date: "2022-01-30", isCurrentMonth: true },
    { date: "2022-01-31", isCurrentMonth: true },
    { date: "2022-02-01" },
    { date: "2022-02-02" },
    { date: "2022-02-03" },
    { date: "2022-02-04" },
    { date: "2022-02-05" },
    { date: "2022-02-06" },
];

const classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
};

const Calendar = () => {
    return (
        <>
            <div className="flex items-center w-full">
                <div className="flex flex-auto">
                    <button
                        type="button"
                        className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Previous month</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Next month</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <h2 className="flex-auto text-center text-sm font-semibold text-gray-900">January</h2>
                <h2 className="pr-1.5 text-right flex-auto text-sm font-semibold text-gray-900">2023</h2>
            </div>
            <div className="mt-2 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>Su</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => (
                    <div key={day.date} className="m-1 border border-gray-200">
                        <button
                            type="button"
                            className={classNames(
                                day.isSelected && "text-white",
                                !day.isSelected && !day.isToday && day.isCurrentMonth && "text-gray-900",
                                !day.isSelected && !day.isToday && !day.isCurrentMonth && "text-black bg-gray-200",
                                day.isSelected && day.isToday && "bg-background-calendar-1",
                                day.isSelected && !day.isToday && "bg-background-calendar",
                                !day.isSelected && "hover:bg-gray-200",
                                day.isSelected && "font-semibold",
                                "text-center h-8 w-full "
                            )}
                        >
                            <time dateTime={day.date}>{day.date.split("-")?.pop()?.replace(/^0/, "")}</time>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Calendar;
