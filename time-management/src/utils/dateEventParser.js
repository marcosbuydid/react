import { parseISO } from "date-fns"

export const dateEventParser = (events = []) => {

    return events.map(event => {
        event.startDate = parseISO(event.startDate);
        event.endDate = parseISO(event.endDate);

        return event;
    })
}
