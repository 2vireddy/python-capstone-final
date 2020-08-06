var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8000",
        "ok": "7998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "944",
        "ok": "944",
        "ko": "21016"
    },
    "maxResponseTime": {
        "total": "21070",
        "ok": "5285",
        "ko": "21070"
    },
    "meanResponseTime": {
        "total": "1613",
        "ok": "1608",
        "ko": "21043"
    },
    "standardDeviation": {
        "total": "770",
        "ok": "706",
        "ko": "27"
    },
    "percentiles1": {
        "total": "1260",
        "ok": "1260",
        "ko": "21043"
    },
    "percentiles2": {
        "total": "2045",
        "ok": "2044",
        "ko": "21057"
    },
    "percentiles3": {
        "total": "3103",
        "ok": "3097",
        "ko": "21067"
    },
    "percentiles4": {
        "total": "3815",
        "ok": "3802",
        "ko": "21069"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3544,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4454,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.944",
        "ok": "55.93",
        "ko": "0.014"
    }
},
contents: {
"req_get--v2-sasb-or-90390": {
        type: "REQUEST",
        name: "GET /v2/sasb/orgs/scores",
path: "GET /v2/sasb/orgs/scores",
pathFormatted: "req_get--v2-sasb-or-90390",
stats: {
    "name": "GET /v2/sasb/orgs/scores",
    "numberOfRequests": {
        "total": "8000",
        "ok": "7998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "944",
        "ok": "944",
        "ko": "21016"
    },
    "maxResponseTime": {
        "total": "21070",
        "ok": "5285",
        "ko": "21070"
    },
    "meanResponseTime": {
        "total": "1613",
        "ok": "1608",
        "ko": "21043"
    },
    "standardDeviation": {
        "total": "770",
        "ok": "706",
        "ko": "27"
    },
    "percentiles1": {
        "total": "1260",
        "ok": "1260",
        "ko": "21043"
    },
    "percentiles2": {
        "total": "2045",
        "ok": "2044",
        "ko": "21057"
    },
    "percentiles3": {
        "total": "3103",
        "ok": "3097",
        "ko": "21067"
    },
    "percentiles4": {
        "total": "3815",
        "ok": "3802",
        "ko": "21069"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3544,
    "percentage": 44
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4454,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.944",
        "ok": "55.93",
        "ko": "0.014"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
