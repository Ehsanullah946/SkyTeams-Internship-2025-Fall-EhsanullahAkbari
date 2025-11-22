// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 a traffic system
// example
// input :  green
// output:  stop
export const trafficSystem = (color) => {
    switch (color) {
        case "green":
            return "Go";
        case "yellow":
            return "Ready";
        case "red":
            return "Stop";
        default:
            return "not defined"
    }
}

