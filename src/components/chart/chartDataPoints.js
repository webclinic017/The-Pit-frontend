export const pieChartData = [{
        id: 'profit',
        label: 'profit',
        value: 259,
        color: 'hsl(271, 70%, 50%)'
    },
    {
        id: 'loss',
        label: 'loss',
        value: 388,
        color: 'hsl(11, 70%, 50%)'
    }
];

export const lineChartData = [{
    id: 'japan',
    color: 'hsl(285, 70%, 50%)',
    data: [{
            x: 'plane',
            y: 282
        },
        {
            x: 'helicopter',
            y: 200
        },
        {
            x: 'boat',
            y: 68
        },
        {
            x: 'train',
            y: 25
        },
        {
            x: 'subway',
            y: 184
        },
        {
            x: 'bus',
            y: 44
        },
        {
            x: 'car',
            y: 215
        },
        {
            x: 'moto',
            y: 80
        },
        {
            x: 'bicycle',
            y: 177
        },
        {
            x: 'horse',
            y: 112
        },
        {
            x: 'skateboard',
            y: 131
        },
        {
            x: 'others',
            y: 191
        }
    ]
}];

export const TreeMapData = {
    "root": {
        "name": "nivo",
        "color": "hsl(47, 70%, 50%)",
        "children": [{
                "name": "viz",
                "color": "hsl(253, 70%, 50%)",
                "children": [{
                        "name": "stack",
                        "color": "hsl(344, 70%, 50%)",
                        "children": [{
                                "name": "cchart",
                                "color": "hsl(340, 70%, 50%)",
                                "loc": 29329
                            },
                            {
                                "name": "xAxis",
                                "color": "hsl(123, 70%, 50%)",
                                "loc": 197911
                            },
                            {
                                "name": "yAxis",
                                "color": "hsl(113, 70%, 50%)",
                                "loc": 120475
                            },
                            {
                                "name": "layers",
                                "color": "hsl(265, 70%, 50%)",
                                "loc": 27498
                            }
                        ]
                    },
                    {
                        "name": "ppie",
                        "color": "hsl(329, 70%, 50%)",
                        "children": [{
                                "name": "chart",
                                "color": "hsl(294, 70%, 50%)",
                                "children": [{
                                        "name": "pie",
                                        "color": "hsl(77, 70%, 50%)",
                                        "children": [{
                                                "name": "outline",
                                                "color": "hsl(147, 70%, 50%)",
                                                "loc": 160896
                                            },
                                            {
                                                "name": "slices",
                                                "color": "hsl(204, 70%, 50%)",
                                                "loc": 181775
                                            },
                                            {
                                                "name": "bbox",
                                                "color": "hsl(40, 70%, 50%)",
                                                "loc": 116928
                                            }
                                        ]
                                    },
                                    {
                                        "name": "donut",
                                        "color": "hsl(40, 70%, 50%)",
                                        "loc": 168253
                                    },
                                    {
                                        "name": "gauge",
                                        "color": "hsl(292, 70%, 50%)",
                                        "loc": 118670
                                    }
                                ]
                            },
                            {
                                "name": "legends",
                                "color": "hsl(122, 70%, 50%)",
                                "loc": 23443
                            }
                        ]
                    }
                ]
            },
            {
                "name": "colors",
                "color": "hsl(292, 70%, 50%)",
                "children": [{
                        "name": "rgb",
                        "color": "hsl(290, 70%, 50%)",
                        "loc": 192348
                    },
                    {
                        "name": "hsl",
                        "color": "hsl(232, 70%, 50%)",
                        "loc": 45874
                    }
                ]
            },
            {
                "name": "utils",
                "color": "hsl(321, 70%, 50%)",
                "children": [{
                        "name": "randomize",
                        "color": "hsl(285, 70%, 50%)",
                        "loc": 7843
                    },
                    {
                        "name": "resetClock",
                        "color": "hsl(282, 70%, 50%)",
                        "loc": 134429
                    },
                    {
                        "name": "noop",
                        "color": "hsl(32, 70%, 50%)",
                        "loc": 58397
                    },
                    {
                        "name": "tick",
                        "color": "hsl(31, 70%, 50%)",
                        "loc": 152339
                    },
                    {
                        "name": "forceGC",
                        "color": "hsl(175, 70%, 50%)",
                        "loc": 74937
                    },
                    {
                        "name": "stackTrace",
                        "color": "hsl(141, 70%, 50%)",
                        "loc": 84049
                    },
                    {
                        "name": "dbg",
                        "color": "hsl(303, 70%, 50%)",
                        "loc": 147004
                    }
                ]
            },
            {
                "name": "generators",
                "color": "hsl(58, 70%, 50%)",
                "children": [{
                        "name": "address",
                        "color": "hsl(270, 70%, 50%)",
                        "loc": 179380
                    },
                    {
                        "name": "city",
                        "color": "hsl(324, 70%, 50%)",
                        "loc": 174966
                    },
                    {
                        "name": "animal",
                        "color": "hsl(204, 70%, 50%)",
                        "loc": 181991
                    },
                    {
                        "name": "movie",
                        "color": "hsl(286, 70%, 50%)",
                        "loc": 199286
                    },
                    {
                        "name": "user",
                        "color": "hsl(66, 70%, 50%)",
                        "loc": 39019
                    }
                ]
            },
            {
                "name": "set",
                "color": "hsl(346, 70%, 50%)",
                "children": [{
                        "name": "clone",
                        "color": "hsl(3, 70%, 50%)",
                        "loc": 27222
                    },
                    {
                        "name": "intersect",
                        "color": "hsl(291, 70%, 50%)",
                        "loc": 164830
                    },
                    {
                        "name": "merge",
                        "color": "hsl(301, 70%, 50%)",
                        "loc": 73683
                    },
                    {
                        "name": "reverse",
                        "color": "hsl(56, 70%, 50%)",
                        "loc": 178328
                    },
                    {
                        "name": "toArray",
                        "color": "hsl(260, 70%, 50%)",
                        "loc": 37659
                    },
                    {
                        "name": "toObject",
                        "color": "hsl(40, 70%, 50%)",
                        "loc": 120996
                    },
                    {
                        "name": "fromCSV",
                        "color": "hsl(223, 70%, 50%)",
                        "loc": 22023
                    },
                    {
                        "name": "slice",
                        "color": "hsl(117, 70%, 50%)",
                        "loc": 141079
                    },
                    {
                        "name": "append",
                        "color": "hsl(3, 70%, 50%)",
                        "loc": 189800
                    },
                    {
                        "name": "prepend",
                        "color": "hsl(191, 70%, 50%)",
                        "loc": 30584
                    },
                    {
                        "name": "shuffle",
                        "color": "hsl(14, 70%, 50%)",
                        "loc": 125807
                    },
                    {
                        "name": "pick",
                        "color": "hsl(33, 70%, 50%)",
                        "loc": 161975
                    },
                    {
                        "name": "plouc",
                        "color": "hsl(358, 70%, 50%)",
                        "loc": 162429
                    }
                ]
            },
            {
                "name": "text",
                "color": "hsl(353, 70%, 50%)",
                "children": [{
                        "name": "trim",
                        "color": "hsl(146, 70%, 50%)",
                        "loc": 190644
                    },
                    {
                        "name": "slugify",
                        "color": "hsl(327, 70%, 50%)",
                        "loc": 110318
                    },
                    {
                        "name": "snakeCase",
                        "color": "hsl(129, 70%, 50%)",
                        "loc": 73540
                    },
                    {
                        "name": "camelCase",
                        "color": "hsl(198, 70%, 50%)",
                        "loc": 143503
                    },
                    {
                        "name": "repeat",
                        "color": "hsl(239, 70%, 50%)",
                        "loc": 69192
                    },
                    {
                        "name": "padLeft",
                        "color": "hsl(200, 70%, 50%)",
                        "loc": 109768
                    },
                    {
                        "name": "padRight",
                        "color": "hsl(99, 70%, 50%)",
                        "loc": 197643
                    },
                    {
                        "name": "sanitize",
                        "color": "hsl(102, 70%, 50%)",
                        "loc": 9343
                    },
                    {
                        "name": "ploucify",
                        "color": "hsl(223, 70%, 50%)",
                        "loc": 162040
                    }
                ]
            },
            {
                "name": "misc",
                "color": "hsl(103, 70%, 50%)",
                "children": [{
                        "name": "greetings",
                        "color": "hsl(197, 70%, 50%)",
                        "children": [{
                                "name": "hey",
                                "color": "hsl(142, 70%, 50%)",
                                "loc": 80377
                            },
                            {
                                "name": "HOWDY",
                                "color": "hsl(265, 70%, 50%)",
                                "loc": 57160
                            },
                            {
                                "name": "aloha",
                                "color": "hsl(14, 70%, 50%)",
                                "loc": 196489
                            },
                            {
                                "name": "AHOY",
                                "color": "hsl(124, 70%, 50%)",
                                "loc": 21662
                            }
                        ]
                    },
                    {
                        "name": "other",
                        "color": "hsl(92, 70%, 50%)",
                        "loc": 151211
                    },
                    {
                        "name": "path",
                        "color": "hsl(266, 70%, 50%)",
                        "children": [{
                                "name": "pathA",
                                "color": "hsl(45, 70%, 50%)",
                                "loc": 169128
                            },
                            {
                                "name": "pathB",
                                "color": "hsl(114, 70%, 50%)",
                                "children": [{
                                        "name": "pathB1",
                                        "color": "hsl(168, 70%, 50%)",
                                        "loc": 120740
                                    },
                                    {
                                        "name": "pathB2",
                                        "color": "hsl(81, 70%, 50%)",
                                        "loc": 59432
                                    },
                                    {
                                        "name": "pathB3",
                                        "color": "hsl(296, 70%, 50%)",
                                        "loc": 89037
                                    },
                                    {
                                        "name": "pathB4",
                                        "color": "hsl(144, 70%, 50%)",
                                        "loc": 77048
                                    }
                                ]
                            },
                            {
                                "name": "pathC",
                                "color": "hsl(174, 70%, 50%)",
                                "children": [{
                                        "name": "pathC1",
                                        "color": "hsl(194, 70%, 50%)",
                                        "loc": 145015
                                    },
                                    {
                                        "name": "pathC2",
                                        "color": "hsl(118, 70%, 50%)",
                                        "loc": 196971
                                    },
                                    {
                                        "name": "pathC3",
                                        "color": "hsl(119, 70%, 50%)",
                                        "loc": 143004
                                    },
                                    {
                                        "name": "pathC4",
                                        "color": "hsl(181, 70%, 50%)",
                                        "loc": 91005
                                    },
                                    {
                                        "name": "pathC5",
                                        "color": "hsl(38, 70%, 50%)",
                                        "loc": 35271
                                    },
                                    {
                                        "name": "pathC6",
                                        "color": "hsl(105, 70%, 50%)",
                                        "loc": 181725
                                    },
                                    {
                                        "name": "pathC7",
                                        "color": "hsl(285, 70%, 50%)",
                                        "loc": 138588
                                    },
                                    {
                                        "name": "pathC8",
                                        "color": "hsl(27, 70%, 50%)",
                                        "loc": 174685
                                    },
                                    {
                                        "name": "pathC9",
                                        "color": "hsl(291, 70%, 50%)",
                                        "loc": 31921
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export const NewData = {
    data: [{
            news_url: 'https://www.xm.com/technical-analysis-eurusd-battles-with-10-week-high-at-1-2150-140087',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/w/w/eurusd-daily-100521-2701.png',
            title: 'Technical Analysis – EURUSD battles with 10-week high at 1.2150',
            text: 'EURUSD jumped to a fresh ten-week high of 1.2176 earlier today before retreating lower. The price found strong support at the 1.1985 barrier and is holding well above the flat 100-day simple moving average (SMA) and the bullish cross within the 20- and 40-day SMAs.',
            source_name: 'XM',
            date: 'Mon, 10 May 2021 02:18:28 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-climbs-to-monthly-highs-beyond-12170-202105100853',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/c/g/f30-2760.jpg',
            title: 'EUR/USD climbs to monthly highs beyond 1.2170',
            text: 'EUR/USD manages to leave behind the earlier dip to the 1.2130 region and retakes the upper end of the range in the 1.2170/80 band, or new monthly peak',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 04:53:52 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Positive',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-price-analysis-bears-seeking-break-of-2-hour-support-202105102019',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/q/u/f34-2873.jpg',
            title: 'EUR/USD Price Analysis: Bears seeking break of 2-hour support',
            text: 'The bears are seeking a sizeable retracement in the pair following the recent bullish spike on the daily time frame which has already started to retra',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 16:19:25 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-steady-above-12150-looking-at-monthly-highs-202105101622',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/l/u/f13-2855.jpg',
            title: 'EUR/USD steady above 1.2150, looking at monthly highs',
            text: 'The EUR/USD reached at 1.2178, a fresh two-month high, and then pulled back finding support above 1.2150. It is hovering around 1.2160, holding onto t',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 12:22:55 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Positive',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-to-suffer-a-corrective-decline-on-a-break-below-12150-202105101314',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/j/0/f26-2825.jpg',
            title: 'EUR/USD to suffer a corrective decline on a break below 1.2150',
            text: 'EUR/USD surged to 1.2176, its highest since February, and was last seen hovering around 1.2160. The pair is still bullish but a corrective decline is',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 09:14:32 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-price-analysis-extra-gains-seen-above-12200-202105101202',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/v/2/f8-2807.jpg',
            title: 'EUR/USD Price Analysis: Extra gains seen above 1.2200',
            text: "EUR/USD managed to clinch new monthly tops near 1.2180 earlier in the session, extending the recovery from last week's lows in the 1.1985/80 band. The",
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 08:02:45 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Positive',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-to-target-the-12243-february-high-commerzbank-202105100742',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/d/n/f6-2738.jpg',
            title: 'EUR/USD to target the 1.2243 February high – Commerzbank',
            text: 'EUR/USD last week saw a strong recovery off the 1.1994/89 band of support (mid March highs and the 22nd April low). In the view of Karen Jones, Team H',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 03:42:22 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-picks-up-bids-above-12100-despite-indecision-over-reflation-fears-202105102358',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/b/3/f25-2911.jpg',
            title: 'EUR/USD picks up bids above 1.2100 despite indecision over reflation fears',
            text: "EUR/USD stays mildly bid around 1.2140 amid Tuesday's Asian session. In doing so, the currency major pair fails to extend the previous day's pullback",
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 19:58:29 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-retreats-to-12150-as-us-treasury-yields-rebound-202105100500',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/z/p/f11-2676.jpg',
            title: 'EUR/USD retreats to 1.2150 as US Treasury yields rebound',
            text: 'The little appreciative move in the US dollar keeps the EUR/USD pair gains under check in the Asian session. The pair peaked at 1.2177, albeit retreat',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 01:00:59 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-likely-moved-into-a-rangebound-phase-uob-202105100441',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/p/6/f5-2669.jpg',
            title: 'EUR/USD likely moved into a rangebound phase – UOB',
            text: 'FX Strategists at UOB Group now see EUR/USD navigating between the 1.2000-1.2130 range. Key Quotes 24-hour view: “Our expectation for EUR to test 1.19',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 00:41:58 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.fxstreet.com/news/eur-usd-contradicting-messages-from-ecb-members-to-weigh-on-the-euro-202105100710',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/t/u/f33-2725.jpg',
            title: 'EUR/USD: Contradicting messages from ECB members to weigh on the euro',
            text: 'EUR/USD has hit the highest levels since February in response to weak US labor figures. Overbought conditions and ECB uncertainty may trigger a downfa',
            source_name: 'FX Street',
            date: 'Mon, 10 May 2021 03:10:02 -0400',
            topics: ['USA', 'ECB', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.dailyfx.com/forex/fundamental/daily_briefing/session_briefing/daily_fundamentals/2021/05/10/US-Dollar-Draws-Near-Key-Support-EUR-USD-EURUSD-to-Two-Month-Highs.html',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/x/f/f7-2847.jpg',
            title: 'US Dollar Draws Near Key Support; EUR/USD to Two-Month Highs',
            text: "It's been a fast and aggressive move of USD-weakness so far in Q2, but the Greenback has come to a key area on the chart around the 90-handle in DXY.",
            source_name: 'DailyFX',
            date: 'Mon, 10 May 2021 11:30:00 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Positive',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.investingcube.com/eur-usd-at-dynamic-resistance-following-the-nfp-report-forex/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/y/c/shutterstock-1428200399-2766.jpg',
            title: 'EUR/USD At Dynamic Resistance Following the NFP Report',
            text: "Last Friday's NFP report disappointed. The US economy added much fewer jobs in April than the market expected, so the dollar was sold across the board.",
            source_name: 'InvestingCube',
            date: 'Mon, 10 May 2021 06:19:00 -0400',
            topics: ['USA', 'Europe', 'NFP'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.investingcube.com/eur-usd-cftc-positioning-report-shows-divergent-positions-on-the-eur-and-usd-forex/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/l/b/shutterstock-1768384334-2860.jpg',
            title: 'EUR/USD: CFTC Positioning Report Shows Divergent Positions on the EUR and USD',
            text: 'The recent upsurge in the EUR/USD, which comes on the back of USD weakness as per current data, is reflected in the latest version of the CFTC Positioning Report. According to the report, speculators raised their gross long positions on the single currency for a third straight week, allowing net […]',
            source_name: 'InvestingCube',
            date: 'Mon, 10 May 2021 13:54:00 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.exchangerates.org.uk/news/32874/2021-05-10-eur-usd-forecast-euro-us-dollar-exchange-rate-struggles-to-extend-gains.html',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/7/3/euro-to-dollar-2-2856.jpg',
            title: 'EUR/USD Weekly Forecast: Euro US Dollar Exchange Rate Struggles To Extend Gains',
            text: 'Euro Dollar Muted in Spite of Sentix Investor Confidence Index Improvement The Euro to US Dollar (EUR/USD) exchange rate struggled to find any particular momentum at the start of the... - 10 May',
            source_name: 'ExchangeRates',
            date: 'Mon, 10 May 2021 17:22:00 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.actionforex.com/contributors/technical-analysis/377779-eur-usd-outlook-bulls-are-taking-a-breather-after-the-biggest-one-day-rally-in-2021-on-friday/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/2/c/f12-2744.jpg',
            title: 'EUR/USD Outlook: Bulls Are Taking A Breather After The Biggest One-Day Rally In 2021 On Friday',
            text: "The Euro eases from new 2 –1/2 month high (1.2176) as traders collect some profits from massive rally on Thu/Fri, with Friday's 0.87% advance marking the biggest one-day rally in 2021. Weekly close above important Fibo barrier at 1.2102 (61.8% of 1.2349/1.1704), where bulls were trapped last week, generated strong bullish signal.",
            source_name: 'Action Forex',
            date: 'Mon, 10 May 2021 03:58:06 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.actionforex.com/contributors/technical-analysis/377787-eurusd-battles-with-10-week-high-at-1-2150/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/h/b/f19-2750.jpg',
            title: 'EURUSD Battles With 10-Week High At 1.2150',
            text: 'EURUSD jumped to a fresh ten-week high of 1.2176 earlier today before retreating lower. The price found strong support at the 1.1985 barrier and is holding well above the flat 100-day simple moving average (SMA) and the bullish cross within the 20- and 40-day SMAs.',
            source_name: 'Action Forex',
            date: 'Mon, 10 May 2021 04:22:18 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Negative',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.actionforex.com/contributors/technical-analysis/377702-eurusd-very-bullish/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/9/8/f40-2699.jpg',
            title: 'EURUSD Very Bullish',
            text: "The euro currency is appearing very bullish against the US dollar, following Friday's huge technical breakout above the 1.2080 resistance barrier. The daily time frame shows that EURUSD bulls could be targeting the 1.2400 level after igniting a large descending broadening wedge pattern.",
            source_name: 'Action Forex',
            date: 'Mon, 10 May 2021 02:17:55 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Positive',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.actionforex.com/technical-outlook/eurusd-outlook/377887-eur-usd-mid-day-outlook-1081/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/m/s/f22-2823.jpg',
            title: 'EUR/USD Mid-Day Outlook',
            text: 'Daily Pivots: (S1) 1.2087; (P) 1.2129; (R1) 1.2205; More…. Intraday bias in EUR/USD stays on the upside at this point.',
            source_name: 'Action Forex',
            date: 'Mon, 10 May 2021 09:05:38 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        },
        {
            news_url: 'https://www.actionforex.com/technical-outlook/eurusd-outlook/377673-eur-usd-daily-outlook-1111/',
            image_url: 'https://forexnewsapi.snapi.dev/images/v1/p/a/f12-2677.jpg',
            title: 'EUR/USD Daily Outlook',
            text: 'Daily Pivots: (S1) 1.2087; (P) 1.2129; (R1) 1.2205; More…. Intraday bias in EUR/USD remains on the upside for the moment.',
            source_name: 'Action Forex',
            date: 'Mon, 10 May 2021 01:08:59 -0400',
            topics: ['USA', 'Europe'],
            sentiment: 'Neutral',
            type: 'Article',
            currency: ['EUR-USD']
        }
    ]
};