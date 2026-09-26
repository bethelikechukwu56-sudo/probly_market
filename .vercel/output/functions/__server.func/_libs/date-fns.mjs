//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = options?.context ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = options?.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = options?.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region node_modules/date-fns/locale/ar-SA/_lib/formatDistance.js
var formatDistanceLocale$7 = {
	lessThanXSeconds: {
		one: "أقل من ثانية واحدة",
		two: "أقل من ثانتين",
		threeToTen: "أقل من {{count}} ثواني",
		other: "أقل من {{count}} ثانية"
	},
	xSeconds: {
		one: "ثانية واحدة",
		two: "ثانتين",
		threeToTen: "{{count}} ثواني",
		other: "{{count}} ثانية"
	},
	halfAMinute: "نصف دقيقة",
	lessThanXMinutes: {
		one: "أقل من دقيقة",
		two: "أقل من دقيقتين",
		threeToTen: "أقل من {{count}} دقائق",
		other: "أقل من {{count}} دقيقة"
	},
	xMinutes: {
		one: "دقيقة واحدة",
		two: "دقيقتين",
		threeToTen: "{{count}} دقائق",
		other: "{{count}} دقيقة"
	},
	aboutXHours: {
		one: "ساعة واحدة تقريباً",
		two: "ساعتين تقريباً",
		threeToTen: "{{count}} ساعات تقريباً",
		other: "{{count}} ساعة تقريباً"
	},
	xHours: {
		one: "ساعة واحدة",
		two: "ساعتين",
		threeToTen: "{{count}} ساعات",
		other: "{{count}} ساعة"
	},
	xDays: {
		one: "يوم واحد",
		two: "يومين",
		threeToTen: "{{count}} أيام",
		other: "{{count}} يوم"
	},
	aboutXWeeks: {
		one: "أسبوع واحد تقريباً",
		two: "أسبوعين تقريباً",
		threeToTen: "{{count}} أسابيع تقريباً",
		other: "{{count}} أسبوع تقريباً"
	},
	xWeeks: {
		one: "أسبوع واحد",
		two: "أسبوعين",
		threeToTen: "{{count}} أسابيع",
		other: "{{count}} أسبوع"
	},
	aboutXMonths: {
		one: "شهر واحد تقريباً",
		two: "شهرين تقريباً",
		threeToTen: "{{count}} أشهر تقريباً",
		other: "{{count}} شهر تقريباً"
	},
	xMonths: {
		one: "شهر واحد",
		two: "شهرين",
		threeToTen: "{{count}} أشهر",
		other: "{{count}} شهر"
	},
	aboutXYears: {
		one: "عام واحد تقريباً",
		two: "عامين تقريباً",
		threeToTen: "{{count}} أعوام تقريباً",
		other: "{{count}} عام تقريباً"
	},
	xYears: {
		one: "عام واحد",
		two: "عامين",
		threeToTen: "{{count}} أعوام",
		other: "{{count}} عام"
	},
	overXYears: {
		one: "أكثر من عام",
		two: "أكثر من عامين",
		threeToTen: "أكثر من {{count}} أعوام",
		other: "أكثر من {{count}} عام"
	},
	almostXYears: {
		one: "عام واحد تقريباً",
		two: "عامين تقريباً",
		threeToTen: "{{count}} أعوام تقريباً",
		other: "{{count}} عام تقريباً"
	}
};
var formatDistance$8 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale$7[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else if (count === 2) result = tokenValue.two;
	else if (count <= 10) result = tokenValue.threeToTen.replace("{{count}}", String(count));
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "في خلال " + result;
		else return "منذ " + result;
	}
	return result;
};
var formatLong$7 = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'عند' {{time}}",
			long: "{{date}} 'عند' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/ar-SA/_lib/formatRelative.js
var formatRelativeLocale$7 = {
	lastWeek: "'أخر' eeee 'عند' p",
	yesterday: "'أمس عند' p",
	today: "'اليوم عند' p",
	tomorrow: "'غداً عند' p",
	nextWeek: "eeee 'عند' p",
	other: "P"
};
var formatRelative$7 = (token, _date, _baseDate, _options) => formatRelativeLocale$7[token];
//#endregion
//#region node_modules/date-fns/locale/ar-SA/_lib/localize.js
var eraValues$7 = {
	narrow: ["ق", "ب"],
	abbreviated: ["ق.م.", "ب.م."],
	wide: ["قبل الميلاد", "بعد الميلاد"]
};
var quarterValues$7 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"ر1",
		"ر2",
		"ر3",
		"ر4"
	],
	wide: [
		"الربع الأول",
		"الربع الثاني",
		"الربع الثالث",
		"الربع الرابع"
	]
};
var monthValues$7 = {
	narrow: [
		"ي",
		"ف",
		"م",
		"أ",
		"م",
		"ي",
		"ي",
		"أ",
		"س",
		"أ",
		"ن",
		"د"
	],
	abbreviated: [
		"ينا",
		"فبر",
		"مارس",
		"أبريل",
		"مايو",
		"يونـ",
		"يولـ",
		"أغسـ",
		"سبتـ",
		"أكتـ",
		"نوفـ",
		"ديسـ"
	],
	wide: [
		"يناير",
		"فبراير",
		"مارس",
		"أبريل",
		"مايو",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	]
};
var dayValues$7 = {
	narrow: [
		"ح",
		"ن",
		"ث",
		"ر",
		"خ",
		"ج",
		"س"
	],
	short: [
		"أحد",
		"اثنين",
		"ثلاثاء",
		"أربعاء",
		"خميس",
		"جمعة",
		"سبت"
	],
	abbreviated: [
		"أحد",
		"اثنـ",
		"ثلا",
		"أربـ",
		"خميـ",
		"جمعة",
		"سبت"
	],
	wide: [
		"الأحد",
		"الاثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	]
};
var dayPeriodValues$7 = {
	narrow: {
		am: "ص",
		pm: "م",
		midnight: "ن",
		noon: "ظ",
		morning: "صباحاً",
		afternoon: "بعد الظهر",
		evening: "مساءاً",
		night: "ليلاً"
	},
	abbreviated: {
		am: "ص",
		pm: "م",
		midnight: "نصف الليل",
		noon: "ظهر",
		morning: "صباحاً",
		afternoon: "بعد الظهر",
		evening: "مساءاً",
		night: "ليلاً"
	},
	wide: {
		am: "ص",
		pm: "م",
		midnight: "نصف الليل",
		noon: "ظهر",
		morning: "صباحاً",
		afternoon: "بعد الظهر",
		evening: "مساءاً",
		night: "ليلاً"
	}
};
var formattingDayPeriodValues$6 = {
	narrow: {
		am: "ص",
		pm: "م",
		midnight: "ن",
		noon: "ظ",
		morning: "في الصباح",
		afternoon: "بعد الظـهر",
		evening: "في المساء",
		night: "في الليل"
	},
	abbreviated: {
		am: "ص",
		pm: "م",
		midnight: "نصف الليل",
		noon: "ظهر",
		morning: "في الصباح",
		afternoon: "بعد الظهر",
		evening: "في المساء",
		night: "في الليل"
	},
	wide: {
		am: "ص",
		pm: "م",
		midnight: "نصف الليل",
		noon: "ظهر",
		morning: "صباحاً",
		afternoon: "بعد الظـهر",
		evening: "في المساء",
		night: "في الليل"
	}
};
var ordinalNumber$7 = (dirtyNumber) => {
	return String(dirtyNumber);
};
//#endregion
//#region node_modules/date-fns/locale/ar-SA.js
/**
* @category Locales
* @summary Arabic locale (Sauid Arabic).
* @language Arabic
* @iso-639-2 ara
* @author Dhaifallah Alwadani [@dalwadani](https://github.com/dalwadani)
*/
var arSA = {
	code: "ar-SA",
	formatDistance: formatDistance$8,
	formatLong: formatLong$7,
	formatRelative: formatRelative$7,
	localize: {
		ordinalNumber: ordinalNumber$7,
		era: buildLocalizeFn({
			values: eraValues$7,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$7,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$7,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$7,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$7,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues$6,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(ق|ب)/i,
				abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
				wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^قبل/i, /^بعد/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^ر[1234]/i,
				wide: /^الربع [1234]/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[يفمأمسند]/i,
				abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,
				wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^ي/i,
					/^ف/i,
					/^م/i,
					/^أ/i,
					/^م/i,
					/^ي/i,
					/^ي/i,
					/^أ/i,
					/^س/i,
					/^أ/i,
					/^ن/i,
					/^د/i
				],
				any: [
					/^ين/i,
					/^ف/i,
					/^مار/i,
					/^أب/i,
					/^ماي/i,
					/^يون/i,
					/^يول/i,
					/^أغ/i,
					/^س/i,
					/^أك/i,
					/^ن/i,
					/^د/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[حنثرخجس]/i,
				short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
				abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
				wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^ح/i,
					/^ن/i,
					/^ث/i,
					/^ر/i,
					/^خ/i,
					/^ج/i,
					/^س/i
				],
				wide: [
					/^الأحد/i,
					/^الاثنين/i,
					/^الثلاثاء/i,
					/^الأربعاء/i,
					/^الخميس/i,
					/^الجمعة/i,
					/^السبت/i
				],
				any: [
					/^أح/i,
					/^اث/i,
					/^ث/i,
					/^أر/i,
					/^خ/i,
					/^ج/i,
					/^س/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/constants.js
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name minutesInMonth
* @summary Minutes in 1 month.
*/
var minutesInMonth = 43200;
/**
* @constant
* @name minutesInDay
* @summary Minutes in 1 day.
*/
var minutesInDay = 1440;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 86400;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
/**
* @constant
* @name constructFromSymbol
* @summary Symbol enabling Date extensions to inherit properties from the reference date.
*
* The symbol is used to enable the `constructFrom` function to construct a date
* using a reference date and a value. It allows to transfer extra properties
* from the reference date to the new date. It's useful for extensions like
* [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
* a constructor argument.
*/
var constructFromSymbol = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
	return defaultOptions;
}
//#endregion
//#region node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/isSameWeek.js
/**
* The {@link isSameWeek} function options.
*/
/**
* @name isSameWeek
* @category Week Helpers
* @summary Are the given dates in the same week (and month and year)?
*
* @description
* Are the given dates in the same week (and month and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same week (and month and year)
*
* @example
* // Are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
* //=> true
*
* @example
* // If week starts with Monday,
* // are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
*   weekStartsOn: 1
* })
* //=> false
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same week?
* const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameWeek(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
//#endregion
//#region node_modules/date-fns/locale/de/_lib/formatDistance.js
var formatDistanceLocale$6 = {
	lessThanXSeconds: {
		standalone: {
			one: "weniger als 1 Sekunde",
			other: "weniger als {{count}} Sekunden"
		},
		withPreposition: {
			one: "weniger als 1 Sekunde",
			other: "weniger als {{count}} Sekunden"
		}
	},
	xSeconds: {
		standalone: {
			one: "1 Sekunde",
			other: "{{count}} Sekunden"
		},
		withPreposition: {
			one: "1 Sekunde",
			other: "{{count}} Sekunden"
		}
	},
	halfAMinute: {
		standalone: "eine halbe Minute",
		withPreposition: "einer halben Minute"
	},
	lessThanXMinutes: {
		standalone: {
			one: "weniger als 1 Minute",
			other: "weniger als {{count}} Minuten"
		},
		withPreposition: {
			one: "weniger als 1 Minute",
			other: "weniger als {{count}} Minuten"
		}
	},
	xMinutes: {
		standalone: {
			one: "1 Minute",
			other: "{{count}} Minuten"
		},
		withPreposition: {
			one: "1 Minute",
			other: "{{count}} Minuten"
		}
	},
	aboutXHours: {
		standalone: {
			one: "etwa 1 Stunde",
			other: "etwa {{count}} Stunden"
		},
		withPreposition: {
			one: "etwa 1 Stunde",
			other: "etwa {{count}} Stunden"
		}
	},
	xHours: {
		standalone: {
			one: "1 Stunde",
			other: "{{count}} Stunden"
		},
		withPreposition: {
			one: "1 Stunde",
			other: "{{count}} Stunden"
		}
	},
	xDays: {
		standalone: {
			one: "1 Tag",
			other: "{{count}} Tage"
		},
		withPreposition: {
			one: "1 Tag",
			other: "{{count}} Tagen"
		}
	},
	aboutXWeeks: {
		standalone: {
			one: "etwa 1 Woche",
			other: "etwa {{count}} Wochen"
		},
		withPreposition: {
			one: "etwa 1 Woche",
			other: "etwa {{count}} Wochen"
		}
	},
	xWeeks: {
		standalone: {
			one: "1 Woche",
			other: "{{count}} Wochen"
		},
		withPreposition: {
			one: "1 Woche",
			other: "{{count}} Wochen"
		}
	},
	aboutXMonths: {
		standalone: {
			one: "etwa 1 Monat",
			other: "etwa {{count}} Monate"
		},
		withPreposition: {
			one: "etwa 1 Monat",
			other: "etwa {{count}} Monaten"
		}
	},
	xMonths: {
		standalone: {
			one: "1 Monat",
			other: "{{count}} Monate"
		},
		withPreposition: {
			one: "1 Monat",
			other: "{{count}} Monaten"
		}
	},
	aboutXYears: {
		standalone: {
			one: "etwa 1 Jahr",
			other: "etwa {{count}} Jahre"
		},
		withPreposition: {
			one: "etwa 1 Jahr",
			other: "etwa {{count}} Jahren"
		}
	},
	xYears: {
		standalone: {
			one: "1 Jahr",
			other: "{{count}} Jahre"
		},
		withPreposition: {
			one: "1 Jahr",
			other: "{{count}} Jahren"
		}
	},
	overXYears: {
		standalone: {
			one: "mehr als 1 Jahr",
			other: "mehr als {{count}} Jahre"
		},
		withPreposition: {
			one: "mehr als 1 Jahr",
			other: "mehr als {{count}} Jahren"
		}
	},
	almostXYears: {
		standalone: {
			one: "fast 1 Jahr",
			other: "fast {{count}} Jahre"
		},
		withPreposition: {
			one: "fast 1 Jahr",
			other: "fast {{count}} Jahren"
		}
	}
};
var formatDistance$7 = (token, count, options) => {
	let result;
	const tokenValue = options?.addSuffix ? formatDistanceLocale$6[token].withPreposition : formatDistanceLocale$6[token].standalone;
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "in " + result;
		else return "vor " + result;
	}
	return result;
};
var formatLong$6 = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, do MMMM y",
			long: "do MMMM y",
			medium: "do MMM y",
			short: "dd.MM.y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'um' {{time}}",
			long: "{{date}} 'um' {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/de/_lib/formatRelative.js
var formatRelativeLocale$6 = {
	lastWeek: "'letzten' eeee 'um' p",
	yesterday: "'gestern um' p",
	today: "'heute um' p",
	tomorrow: "'morgen um' p",
	nextWeek: "eeee 'um' p",
	other: "P"
};
var formatRelative$6 = (token, _date, _baseDate, _options) => formatRelativeLocale$6[token];
//#endregion
//#region node_modules/date-fns/locale/de/_lib/localize.js
var eraValues$6 = {
	narrow: ["v.Chr.", "n.Chr."],
	abbreviated: ["v.Chr.", "n.Chr."],
	wide: ["vor Christus", "nach Christus"]
};
var quarterValues$6 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1. Quartal",
		"2. Quartal",
		"3. Quartal",
		"4. Quartal"
	]
};
var monthValues$6 = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Jan",
		"Feb",
		"Mär",
		"Apr",
		"Mai",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Okt",
		"Nov",
		"Dez"
	],
	wide: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	]
};
var formattingMonthValues = {
	narrow: monthValues$6.narrow,
	abbreviated: [
		"Jan.",
		"Feb.",
		"März",
		"Apr.",
		"Mai",
		"Juni",
		"Juli",
		"Aug.",
		"Sep.",
		"Okt.",
		"Nov.",
		"Dez."
	],
	wide: monthValues$6.wide
};
var dayValues$6 = {
	narrow: [
		"S",
		"M",
		"D",
		"M",
		"D",
		"F",
		"S"
	],
	short: [
		"So",
		"Mo",
		"Di",
		"Mi",
		"Do",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"So.",
		"Mo.",
		"Di.",
		"Mi.",
		"Do.",
		"Fr.",
		"Sa."
	],
	wide: [
		"Sonntag",
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag"
	]
};
var dayPeriodValues$6 = {
	narrow: {
		am: "vm.",
		pm: "nm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachm.",
		evening: "Abend",
		night: "Nacht"
	},
	abbreviated: {
		am: "vorm.",
		pm: "nachm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachmittag",
		evening: "Abend",
		night: "Nacht"
	},
	wide: {
		am: "vormittags",
		pm: "nachmittags",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "Morgen",
		afternoon: "Nachmittag",
		evening: "Abend",
		night: "Nacht"
	}
};
var formattingDayPeriodValues$5 = {
	narrow: {
		am: "vm.",
		pm: "nm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachm.",
		evening: "abends",
		night: "nachts"
	},
	abbreviated: {
		am: "vorm.",
		pm: "nachm.",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachmittags",
		evening: "abends",
		night: "nachts"
	},
	wide: {
		am: "vormittags",
		pm: "nachmittags",
		midnight: "Mitternacht",
		noon: "Mittag",
		morning: "morgens",
		afternoon: "nachmittags",
		evening: "abends",
		night: "nachts"
	}
};
var ordinalNumber$6 = (dirtyNumber) => {
	return Number(dirtyNumber) + ".";
};
//#endregion
//#region node_modules/date-fns/locale/de.js
/**
* @category Locales
* @summary German locale.
* @language German
* @iso-639-2 deu
* @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
* @author Asia [@asia-t](https://github.com/asia-t)
* @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
* @author RomanErnst [@pex](https://github.com/pex)
* @author Philipp Keck [@Philipp91](https://github.com/Philipp91)
*/
var de = {
	code: "de",
	formatDistance: formatDistance$7,
	formatLong: formatLong$6,
	formatRelative: formatRelative$6,
	localize: {
		ordinalNumber: ordinalNumber$6,
		era: buildLocalizeFn({
			values: eraValues$6,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$6,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$6,
			formattingValues: formattingMonthValues,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$6,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$6,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues$5,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(\.)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
				abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
				wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^v/i, /^n/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](\.)? Quartal/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
				wide: /^(jänner|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^j[aä]/i,
					/^f/i,
					/^mär/i,
					/^ap/i,
					/^mai/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[smdmf]/i,
				short: /^(so|mo|di|mi|do|fr|sa)/i,
				abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
				wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^so/i,
				/^mo/i,
				/^di/i,
				/^mi/i,
				/^do/i,
				/^f/i,
				/^sa/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
				abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
				wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: {
				am: /^v/i,
				pm: /^n/i,
				midnight: /^Mitte/i,
				noon: /^Mitta/i,
				morning: /morgens/i,
				afternoon: /nachmittags/i,
				evening: /abends/i,
				night: /nachts/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale$5 = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
};
var formatDistance$6 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale$5[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "in " + result;
		else return result + " ago";
	}
	return result;
};
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale$5 = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
};
var formatRelative$5 = (token, _date, _baseDate, _options) => formatRelativeLocale$5[token];
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues$5 = {
	narrow: ["B", "A"],
	abbreviated: ["BC", "AD"],
	wide: ["Before Christ", "Anno Domini"]
};
var quarterValues$5 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1st quarter",
		"2nd quarter",
		"3rd quarter",
		"4th quarter"
	]
};
var monthValues$5 = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	wide: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
};
var dayValues$5 = {
	narrow: [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	short: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	wide: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
};
var dayPeriodValues$5 = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	}
};
var formattingDayPeriodValues$4 = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	}
};
var ordinalNumber$5 = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return number + "st";
		case 2: return number + "nd";
		case 3: return number + "rd";
	}
	return number + "th";
};
var localize$5 = {
	ordinalNumber: ordinalNumber$5,
	era: buildLocalizeFn({
		values: eraValues$5,
		defaultWidth: "wide"
	}),
	quarter: buildLocalizeFn({
		values: quarterValues$5,
		defaultWidth: "wide",
		argumentCallback: (quarter) => quarter - 1
	}),
	month: buildLocalizeFn({
		values: monthValues$5,
		defaultWidth: "wide"
	}),
	day: buildLocalizeFn({
		values: dayValues$5,
		defaultWidth: "wide"
	}),
	dayPeriod: buildLocalizeFn({
		values: dayPeriodValues$5,
		defaultWidth: "wide",
		formattingValues: formattingDayPeriodValues$4,
		defaultFormattingWidth: "wide"
	})
};
var match$5 = {
	ordinalNumber: buildMatchPatternFn({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (value) => parseInt(value, 10)
	}),
	era: buildMatchFn({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: buildMatchFn({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (index) => index + 1
	}),
	month: buildMatchFn({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: buildMatchFn({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: buildMatchFn({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
};
//#endregion
//#region node_modules/date-fns/locale/en-US.js
/**
* @category Locales
* @summary English locale (United States).
* @language English
* @iso-639-2 eng
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var enUS = {
	code: "en-US",
	formatDistance: formatDistance$6,
	formatLong: {
		date: buildFormatLongFn({
			formats: {
				full: "EEEE, MMMM do, y",
				long: "MMMM do, y",
				medium: "MMM d, y",
				short: "MM/dd/yyyy"
			},
			defaultWidth: "full"
		}),
		time: buildFormatLongFn({
			formats: {
				full: "h:mm:ss a zzzz",
				long: "h:mm:ss a z",
				medium: "h:mm:ss a",
				short: "h:mm a"
			},
			defaultWidth: "full"
		}),
		dateTime: buildFormatLongFn({
			formats: {
				full: "{{date}} 'at' {{time}}",
				long: "{{date}} 'at' {{time}}",
				medium: "{{date}}, {{time}}",
				short: "{{date}}, {{time}}"
			},
			defaultWidth: "full"
		})
	},
	formatRelative: formatRelative$5,
	localize: localize$5,
	match: match$5,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/locale/es/_lib/formatDistance.js
var formatDistanceLocale$4 = {
	lessThanXSeconds: {
		one: "menos de un segundo",
		other: "menos de {{count}} segundos"
	},
	xSeconds: {
		one: "1 segundo",
		other: "{{count}} segundos"
	},
	halfAMinute: "medio minuto",
	lessThanXMinutes: {
		one: "menos de un minuto",
		other: "menos de {{count}} minutos"
	},
	xMinutes: {
		one: "1 minuto",
		other: "{{count}} minutos"
	},
	aboutXHours: {
		one: "alrededor de 1 hora",
		other: "alrededor de {{count}} horas"
	},
	xHours: {
		one: "1 hora",
		other: "{{count}} horas"
	},
	xDays: {
		one: "1 día",
		other: "{{count}} días"
	},
	aboutXWeeks: {
		one: "alrededor de 1 semana",
		other: "alrededor de {{count}} semanas"
	},
	xWeeks: {
		one: "1 semana",
		other: "{{count}} semanas"
	},
	aboutXMonths: {
		one: "alrededor de 1 mes",
		other: "alrededor de {{count}} meses"
	},
	xMonths: {
		one: "1 mes",
		other: "{{count}} meses"
	},
	aboutXYears: {
		one: "alrededor de 1 año",
		other: "alrededor de {{count}} años"
	},
	xYears: {
		one: "1 año",
		other: "{{count}} años"
	},
	overXYears: {
		one: "más de 1 año",
		other: "más de {{count}} años"
	},
	almostXYears: {
		one: "casi 1 año",
		other: "casi {{count}} años"
	}
};
var formatDistance$5 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale$4[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "en " + result;
		else return "hace " + result;
	}
	return result;
};
var formatLong$4 = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'a las' {{time}}",
			long: "{{date}} 'a las' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/es/_lib/formatRelative.js
var formatRelativeLocale$4 = {
	lastWeek: "'el' eeee 'pasado a la' p",
	yesterday: "'ayer a la' p",
	today: "'hoy a la' p",
	tomorrow: "'mañana a la' p",
	nextWeek: "eeee 'a la' p",
	other: "P"
};
var formatRelativeLocalePlural = {
	lastWeek: "'el' eeee 'pasado a las' p",
	yesterday: "'ayer a las' p",
	today: "'hoy a las' p",
	tomorrow: "'mañana a las' p",
	nextWeek: "eeee 'a las' p",
	other: "P"
};
var formatRelative$4 = (token, date, _baseDate, _options) => {
	if (date.getHours() !== 1) return formatRelativeLocalePlural[token];
	else return formatRelativeLocale$4[token];
};
//#endregion
//#region node_modules/date-fns/locale/es/_lib/localize.js
var eraValues$4 = {
	narrow: ["AC", "DC"],
	abbreviated: ["AC", "DC"],
	wide: ["antes de cristo", "después de cristo"]
};
var quarterValues$4 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	wide: [
		"1º trimestre",
		"2º trimestre",
		"3º trimestre",
		"4º trimestre"
	]
};
var monthValues$4 = {
	narrow: [
		"e",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"ene",
		"feb",
		"mar",
		"abr",
		"may",
		"jun",
		"jul",
		"ago",
		"sep",
		"oct",
		"nov",
		"dic"
	],
	wide: [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre"
	]
};
var dayValues$4 = {
	narrow: [
		"d",
		"l",
		"m",
		"m",
		"j",
		"v",
		"s"
	],
	short: [
		"do",
		"lu",
		"ma",
		"mi",
		"ju",
		"vi",
		"sá"
	],
	abbreviated: [
		"dom",
		"lun",
		"mar",
		"mié",
		"jue",
		"vie",
		"sáb"
	],
	wide: [
		"domingo",
		"lunes",
		"martes",
		"miércoles",
		"jueves",
		"viernes",
		"sábado"
	]
};
var dayPeriodValues$4 = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "md",
		morning: "mañana",
		afternoon: "tarde",
		evening: "tarde",
		night: "noche"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "medianoche",
		noon: "mediodia",
		morning: "mañana",
		afternoon: "tarde",
		evening: "tarde",
		night: "noche"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "medianoche",
		noon: "mediodia",
		morning: "mañana",
		afternoon: "tarde",
		evening: "tarde",
		night: "noche"
	}
};
var formattingDayPeriodValues$3 = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mn",
		noon: "md",
		morning: "de la mañana",
		afternoon: "de la tarde",
		evening: "de la tarde",
		night: "de la noche"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "medianoche",
		noon: "mediodia",
		morning: "de la mañana",
		afternoon: "de la tarde",
		evening: "de la tarde",
		night: "de la noche"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "medianoche",
		noon: "mediodia",
		morning: "de la mañana",
		afternoon: "de la tarde",
		evening: "de la tarde",
		night: "de la noche"
	}
};
var ordinalNumber$4 = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + "º";
};
//#endregion
//#region node_modules/date-fns/locale/es.js
/**
* @category Locales
* @summary Spanish locale.
* @language Spanish
* @iso-639-2 spa
* @author Juan Angosto [@juanangosto](https://github.com/juanangosto)
* @author Guillermo Grau [@guigrpa](https://github.com/guigrpa)
* @author Fernando Agüero [@fjaguero](https://github.com/fjaguero)
* @author Gastón Haro [@harogaston](https://github.com/harogaston)
* @author Yago Carballo [@YagoCarballo](https://github.com/YagoCarballo)
*/
var es = {
	code: "es",
	formatDistance: formatDistance$5,
	formatLong: formatLong$4,
	formatRelative: formatRelative$4,
	localize: {
		ordinalNumber: ordinalNumber$4,
		era: buildLocalizeFn({
			values: eraValues$4,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$4,
			defaultWidth: "wide",
			argumentCallback: (quarter) => Number(quarter) - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$4,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$4,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$4,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues$3,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(º)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(value) {
				return parseInt(value, 10);
			}
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
				wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[efmajsond]/i,
				abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
				wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^e/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^en/i,
					/^feb/i,
					/^mar/i,
					/^abr/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^ago/i,
					/^sep/i,
					/^oct/i,
					/^nov/i,
					/^dic/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[dlmjvs]/i,
				short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
				abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
				wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^l/i,
					/^m/i,
					/^m/i,
					/^j/i,
					/^v/i,
					/^s/i
				],
				any: [
					/^do/i,
					/^lu/i,
					/^ma/i,
					/^mi/i,
					/^ju/i,
					/^vi/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
				any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mn/i,
				noon: /^md/i,
				morning: /mañana/i,
				afternoon: /tarde/i,
				evening: /tarde/i,
				night: /noche/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/locale/fr/_lib/formatDistance.js
var formatDistanceLocale$3 = {
	lessThanXSeconds: {
		one: "moins d’une seconde",
		other: "moins de {{count}} secondes"
	},
	xSeconds: {
		one: "1 seconde",
		other: "{{count}} secondes"
	},
	halfAMinute: "30 secondes",
	lessThanXMinutes: {
		one: "moins d’une minute",
		other: "moins de {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "environ 1 heure",
		other: "environ {{count}} heures"
	},
	xHours: {
		one: "1 heure",
		other: "{{count}} heures"
	},
	xDays: {
		one: "1 jour",
		other: "{{count}} jours"
	},
	aboutXWeeks: {
		one: "environ 1 semaine",
		other: "environ {{count}} semaines"
	},
	xWeeks: {
		one: "1 semaine",
		other: "{{count}} semaines"
	},
	aboutXMonths: {
		one: "environ 1 mois",
		other: "environ {{count}} mois"
	},
	xMonths: {
		one: "1 mois",
		other: "{{count}} mois"
	},
	aboutXYears: {
		one: "environ 1 an",
		other: "environ {{count}} ans"
	},
	xYears: {
		one: "1 an",
		other: "{{count}} ans"
	},
	overXYears: {
		one: "plus d’un an",
		other: "plus de {{count}} ans"
	},
	almostXYears: {
		one: "presqu’un an",
		other: "presque {{count}} ans"
	}
};
var formatDistance$4 = (token, count, options) => {
	let result;
	const form = formatDistanceLocale$3[token];
	if (typeof form === "string") result = form;
	else if (count === 1) result = form.one;
	else result = form.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "dans " + result;
		else return "il y a " + result;
	}
	return result;
};
var formatLong$3 = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE d MMMM y",
			long: "d MMMM y",
			medium: "d MMM y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'à' {{time}}",
			long: "{{date}} 'à' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/fr/_lib/formatRelative.js
var formatRelativeLocale$3 = {
	lastWeek: "eeee 'dernier à' p",
	yesterday: "'hier à' p",
	today: "'aujourd’hui à' p",
	tomorrow: "'demain à' p'",
	nextWeek: "eeee 'prochain à' p",
	other: "P"
};
var formatRelative$3 = (token, _date, _baseDate, _options) => formatRelativeLocale$3[token];
//#endregion
//#region node_modules/date-fns/locale/fr/_lib/localize.js
var eraValues$3 = {
	narrow: ["av. J.-C", "ap. J.-C"],
	abbreviated: ["av. J.-C", "ap. J.-C"],
	wide: ["avant Jésus-Christ", "après Jésus-Christ"]
};
var quarterValues$3 = {
	narrow: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	abbreviated: [
		"1er trim.",
		"2ème trim.",
		"3ème trim.",
		"4ème trim."
	],
	wide: [
		"1er trimestre",
		"2ème trimestre",
		"3ème trimestre",
		"4ème trimestre"
	]
};
var monthValues$3 = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"janv.",
		"févr.",
		"mars",
		"avr.",
		"mai",
		"juin",
		"juil.",
		"août",
		"sept.",
		"oct.",
		"nov.",
		"déc."
	],
	wide: [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	]
};
var dayValues$3 = {
	narrow: [
		"D",
		"L",
		"M",
		"M",
		"J",
		"V",
		"S"
	],
	short: [
		"di",
		"lu",
		"ma",
		"me",
		"je",
		"ve",
		"sa"
	],
	abbreviated: [
		"dim.",
		"lun.",
		"mar.",
		"mer.",
		"jeu.",
		"ven.",
		"sam."
	],
	wide: [
		"dimanche",
		"lundi",
		"mardi",
		"mercredi",
		"jeudi",
		"vendredi",
		"samedi"
	]
};
var dayPeriodValues$3 = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "mat.",
		afternoon: "ap.m.",
		evening: "soir",
		night: "mat."
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "matin",
		afternoon: "après-midi",
		evening: "soir",
		night: "matin"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "minuit",
		noon: "midi",
		morning: "du matin",
		afternoon: "de l’après-midi",
		evening: "du soir",
		night: "du matin"
	}
};
var ordinalNumber$3 = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	const unit = options?.unit;
	if (number === 0) return "0";
	const feminineUnits = [
		"year",
		"week",
		"hour",
		"minute",
		"second"
	];
	let suffix;
	if (number === 1) suffix = unit && feminineUnits.includes(unit) ? "ère" : "er";
	else suffix = "ème";
	return number + suffix;
};
var LONG_MONTHS_TOKENS = ["MMM", "MMMM"];
//#endregion
//#region node_modules/date-fns/locale/fr.js
/**
* @category Locales
* @summary French locale.
* @language French
* @iso-639-2 fra
* @author Jean Dupouy [@izeau](https://github.com/izeau)
* @author François B [@fbonzon](https://github.com/fbonzon)
*/
var fr = {
	code: "fr",
	formatDistance: formatDistance$4,
	formatLong: formatLong$3,
	formatRelative: formatRelative$3,
	localize: {
		preprocessor: (date, parts) => {
			if (date.getDate() === 1) return parts;
			if (!parts.some((part) => part.isToken && LONG_MONTHS_TOKENS.includes(part.value))) return parts;
			return parts.map((part) => part.isToken && part.value === "do" ? {
				isToken: true,
				value: "d"
			} : part);
		},
		ordinalNumber: ordinalNumber$3,
		era: buildLocalizeFn({
			values: eraValues$3,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$3,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$3,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$3,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$3,
			defaultWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(ième|ère|ème|er|e)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
				abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
				wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^av/i, /^ap/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^T?[1234]/i,
				abbreviated: /^[1234](er|ème|e)? trim\.?/i,
				wide: /^[1234](er|ème|e)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
				wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^av/i,
					/^ma/i,
					/^juin/i,
					/^juil/i,
					/^ao/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[lmjvsd]/i,
				short: /^(di|lu|ma|me|je|ve|sa)/i,
				abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
				wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^l/i,
					/^m/i,
					/^m/i,
					/^j/i,
					/^v/i,
					/^s/i
				],
				any: [
					/^di/i,
					/^lu/i,
					/^ma/i,
					/^me/i,
					/^je/i,
					/^ve/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
				any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^min/i,
				noon: /^mid/i,
				morning: /mat/i,
				afternoon: /ap/i,
				evening: /soir/i,
				night: /nuit/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
//#region node_modules/date-fns/locale/ja/_lib/formatDistance.js
var formatDistanceLocale$2 = {
	lessThanXSeconds: {
		one: "1秒未満",
		other: "{{count}}秒未満",
		oneWithSuffix: "約1秒",
		otherWithSuffix: "約{{count}}秒"
	},
	xSeconds: {
		one: "1秒",
		other: "{{count}}秒"
	},
	halfAMinute: "30秒",
	lessThanXMinutes: {
		one: "1分未満",
		other: "{{count}}分未満",
		oneWithSuffix: "約1分",
		otherWithSuffix: "約{{count}}分"
	},
	xMinutes: {
		one: "1分",
		other: "{{count}}分"
	},
	aboutXHours: {
		one: "約1時間",
		other: "約{{count}}時間"
	},
	xHours: {
		one: "1時間",
		other: "{{count}}時間"
	},
	xDays: {
		one: "1日",
		other: "{{count}}日"
	},
	aboutXWeeks: {
		one: "約1週間",
		other: "約{{count}}週間"
	},
	xWeeks: {
		one: "1週間",
		other: "{{count}}週間"
	},
	aboutXMonths: {
		one: "約1か月",
		other: "約{{count}}か月"
	},
	xMonths: {
		one: "1か月",
		other: "{{count}}か月"
	},
	aboutXYears: {
		one: "約1年",
		other: "約{{count}}年"
	},
	xYears: {
		one: "1年",
		other: "{{count}}年"
	},
	overXYears: {
		one: "1年以上",
		other: "{{count}}年以上"
	},
	almostXYears: {
		one: "1年近く",
		other: "{{count}}年近く"
	}
};
var formatDistance$3 = (token, count, options) => {
	options = options || {};
	let result;
	const tokenValue = formatDistanceLocale$2[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) {
		if (options.addSuffix && tokenValue.oneWithSuffix) result = tokenValue.oneWithSuffix;
		else result = tokenValue.one;
	} else if (options.addSuffix && tokenValue.otherWithSuffix) result = tokenValue.otherWithSuffix.replace("{{count}}", String(count));
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options.addSuffix) {
		if (options.comparison && options.comparison > 0) return result + "後";
		else return result + "前";
	}
	return result;
};
var formatLong$2 = {
	date: buildFormatLongFn({
		formats: {
			full: "y年M月d日EEEE",
			long: "y年M月d日",
			medium: "y/MM/dd",
			short: "y/MM/dd"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "H時mm分ss秒 zzzz",
			long: "H:mm:ss z",
			medium: "H:mm:ss",
			short: "H:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/ja/_lib/formatRelative.js
var formatRelativeLocale$2 = {
	lastWeek: "先週のeeeeのp",
	yesterday: "昨日のp",
	today: "今日のp",
	tomorrow: "明日のp",
	nextWeek: "翌週のeeeeのp",
	other: "P"
};
var formatRelative$2 = (token, _date, _baseDate, _options) => {
	return formatRelativeLocale$2[token];
};
//#endregion
//#region node_modules/date-fns/locale/ja/_lib/localize.js
var eraValues$2 = {
	narrow: ["BC", "AC"],
	abbreviated: ["紀元前", "西暦"],
	wide: ["紀元前", "西暦"]
};
var quarterValues$2 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"第1四半期",
		"第2四半期",
		"第3四半期",
		"第4四半期"
	]
};
var monthValues$2 = {
	narrow: [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"11",
		"12"
	],
	abbreviated: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	],
	wide: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	]
};
var dayValues$2 = {
	narrow: [
		"日",
		"月",
		"火",
		"水",
		"木",
		"金",
		"土"
	],
	short: [
		"日",
		"月",
		"火",
		"水",
		"木",
		"金",
		"土"
	],
	abbreviated: [
		"日",
		"月",
		"火",
		"水",
		"木",
		"金",
		"土"
	],
	wide: [
		"日曜日",
		"月曜日",
		"火曜日",
		"水曜日",
		"木曜日",
		"金曜日",
		"土曜日"
	]
};
var dayPeriodValues$2 = {
	narrow: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	},
	abbreviated: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	},
	wide: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	}
};
var formattingDayPeriodValues$2 = {
	narrow: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	},
	abbreviated: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	},
	wide: {
		am: "午前",
		pm: "午後",
		midnight: "深夜",
		noon: "正午",
		morning: "朝",
		afternoon: "午後",
		evening: "夜",
		night: "深夜"
	}
};
var ordinalNumber$2 = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	switch (String(options?.unit)) {
		case "year": return `${number}年`;
		case "quarter": return `第${number}四半期`;
		case "month": return `${number}月`;
		case "week": return `第${number}週`;
		case "date": return `${number}日`;
		case "hour": return `${number}時`;
		case "minute": return `${number}分`;
		case "second": return `${number}秒`;
		default: return `${number}`;
	}
};
//#endregion
//#region node_modules/date-fns/locale/ja.js
/**
* @category Locales
* @summary Japanese locale.
* @language Japanese
* @iso-639-2 jpn
* @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
* @author Yamagishi Kazutoshi [@ykzts](https://github.com/ykzts)
* @author Luca Ban [@mesqueeb](https://github.com/mesqueeb)
* @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
* @author Taiki IKeda [@so99ynoodles](https://github.com/so99ynoodles)
*/
var ja = {
	code: "ja",
	formatDistance: formatDistance$3,
	formatLong: formatLong$2,
	formatRelative: formatRelative$2,
	localize: {
		ordinalNumber: ordinalNumber$2,
		era: buildLocalizeFn({
			values: eraValues$2,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$2,
			defaultWidth: "wide",
			argumentCallback: (quarter) => Number(quarter) - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$2,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$2,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$2,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues$2,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
			parsePattern: /\d+/i,
			valueCallback: function(value) {
				return parseInt(value, 10);
			}
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(B\.?C\.?|A\.?D\.?)/i,
				abbreviated: /^(紀元[前後]|西暦)/i,
				wide: /^(紀元[前後]|西暦)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [/^B/i, /^A/i],
				any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^Q[1234]/i,
				wide: /^第[1234一二三四１２３４]四半期/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/(1|一|１)/i,
				/(2|二|２)/i,
				/(3|三|３)/i,
				/(4|四|４)/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^([123456789]|1[012])/,
				abbreviated: /^([123456789]|1[012])月/i,
				wide: /^([123456789]|1[012])月/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^1\D/,
				/^2/,
				/^3/,
				/^4/,
				/^5/,
				/^6/,
				/^7/,
				/^8/,
				/^9/,
				/^10/,
				/^11/,
				/^12/
			] },
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[日月火水木金土]/,
				short: /^[日月火水木金土]/,
				abbreviated: /^[日月火水木金土]/,
				wide: /^[日月火水木金土]曜日/
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/^日/,
				/^月/,
				/^火/,
				/^水/,
				/^木/,
				/^金/,
				/^土/
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^(A|午前)/i,
				pm: /^(P|午後)/i,
				midnight: /^深夜|真夜中/i,
				noon: /^正午/i,
				morning: /^朝/i,
				afternoon: /^午後/i,
				evening: /^夜/i,
				night: /^深夜/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/locale/pt/_lib/formatDistance.js
var formatDistanceLocale$1 = {
	lessThanXSeconds: {
		one: "menos de um segundo",
		other: "menos de {{count}} segundos"
	},
	xSeconds: {
		one: "1 segundo",
		other: "{{count}} segundos"
	},
	halfAMinute: "meio minuto",
	lessThanXMinutes: {
		one: "menos de um minuto",
		other: "menos de {{count}} minutos"
	},
	xMinutes: {
		one: "1 minuto",
		other: "{{count}} minutos"
	},
	aboutXHours: {
		one: "aproximadamente 1 hora",
		other: "aproximadamente {{count}} horas"
	},
	xHours: {
		one: "1 hora",
		other: "{{count}} horas"
	},
	xDays: {
		one: "1 dia",
		other: "{{count}} dias"
	},
	aboutXWeeks: {
		one: "aproximadamente 1 semana",
		other: "aproximadamente {{count}} semanas"
	},
	xWeeks: {
		one: "1 semana",
		other: "{{count}} semanas"
	},
	aboutXMonths: {
		one: "aproximadamente 1 mês",
		other: "aproximadamente {{count}} meses"
	},
	xMonths: {
		one: "1 mês",
		other: "{{count}} meses"
	},
	aboutXYears: {
		one: "aproximadamente 1 ano",
		other: "aproximadamente {{count}} anos"
	},
	xYears: {
		one: "1 ano",
		other: "{{count}} anos"
	},
	overXYears: {
		one: "mais de 1 ano",
		other: "mais de {{count}} anos"
	},
	almostXYears: {
		one: "quase 1 ano",
		other: "quase {{count}} anos"
	}
};
var formatDistance$2 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale$1[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return "daqui a " + result;
		else return "há " + result;
	}
	return result;
};
var formatLong$1 = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, d 'de' MMMM 'de' y",
			long: "d 'de' MMMM 'de' y",
			medium: "d 'de' MMM 'de' y",
			short: "dd/MM/y"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "HH:mm:ss zzzz",
			long: "HH:mm:ss z",
			medium: "HH:mm:ss",
			short: "HH:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'às' {{time}}",
			long: "{{date}} 'às' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/pt/_lib/formatRelative.js
var formatRelativeLocale$1 = {
	lastWeek: (date) => {
		const weekday = date.getDay();
		return "'" + (weekday === 0 || weekday === 6 ? "último" : "última") + "' eeee 'às' p";
	},
	yesterday: "'ontem às' p",
	today: "'hoje às' p",
	tomorrow: "'amanhã às' p",
	nextWeek: "eeee 'às' p",
	other: "P"
};
var formatRelative$1 = (token, date, _baseDate, _options) => {
	const format = formatRelativeLocale$1[token];
	if (typeof format === "function") return format(date);
	return format;
};
//#endregion
//#region node_modules/date-fns/locale/pt/_lib/localize.js
var eraValues$1 = {
	narrow: ["aC", "dC"],
	abbreviated: ["a.C.", "d.C."],
	wide: ["antes de Cristo", "depois de Cristo"]
};
var quarterValues$1 = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"T1",
		"T2",
		"T3",
		"T4"
	],
	wide: [
		"1º trimestre",
		"2º trimestre",
		"3º trimestre",
		"4º trimestre"
	]
};
var monthValues$1 = {
	narrow: [
		"j",
		"f",
		"m",
		"a",
		"m",
		"j",
		"j",
		"a",
		"s",
		"o",
		"n",
		"d"
	],
	abbreviated: [
		"jan",
		"fev",
		"mar",
		"abr",
		"mai",
		"jun",
		"jul",
		"ago",
		"set",
		"out",
		"nov",
		"dez"
	],
	wide: [
		"janeiro",
		"fevereiro",
		"março",
		"abril",
		"maio",
		"junho",
		"julho",
		"agosto",
		"setembro",
		"outubro",
		"novembro",
		"dezembro"
	]
};
var dayValues$1 = {
	narrow: [
		"d",
		"s",
		"t",
		"q",
		"q",
		"s",
		"s"
	],
	short: [
		"dom",
		"seg",
		"ter",
		"qua",
		"qui",
		"sex",
		"sáb"
	],
	abbreviated: [
		"dom",
		"seg",
		"ter",
		"qua",
		"qui",
		"sex",
		"sáb"
	],
	wide: [
		"domingo",
		"segunda-feira",
		"terça-feira",
		"quarta-feira",
		"quinta-feira",
		"sexta-feira",
		"sábado"
	]
};
var dayPeriodValues$1 = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "manhã",
		afternoon: "tarde",
		evening: "noite",
		night: "madrugada"
	}
};
var formattingDayPeriodValues$1 = {
	narrow: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	},
	wide: {
		am: "AM",
		pm: "PM",
		midnight: "meia-noite",
		noon: "meio-dia",
		morning: "da manhã",
		afternoon: "da tarde",
		evening: "da noite",
		night: "da madrugada"
	}
};
var ordinalNumber$1 = (dirtyNumber, _options) => {
	return Number(dirtyNumber) + "º";
};
//#endregion
//#region node_modules/date-fns/locale/pt.js
/**
* @category Locales
* @summary Portuguese locale.
* @language Portuguese
* @iso-639-2 por
* @author Dário Freire [@dfreire](https://github.com/dfreire)
* @author Adrián de la Rosa [@adrm](https://github.com/adrm)
*/
var pt = {
	code: "pt",
	formatDistance: formatDistance$2,
	formatLong: formatLong$1,
	formatRelative: formatRelative$1,
	localize: {
		ordinalNumber: ordinalNumber$1,
		era: buildLocalizeFn({
			values: eraValues$1,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues$1,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues$1,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues$1,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues$1,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues$1,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(º|ª)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(ac|dc|a|d)/i,
				abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
				wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				any: [/^ac/i, /^dc/i],
				wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
			},
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^T[1234]/i,
				wide: /^[1234](º|ª)? trimestre/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
				wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ab/i,
					/^mai/i,
					/^jun/i,
					/^jul/i,
					/^ag/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[dstq]/i,
				short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
				abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
				wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^d/i,
					/^s/i,
					/^t/i,
					/^q/i,
					/^q/i,
					/^s/i,
					/^s/i
				],
				any: [
					/^d/i,
					/^seg/i,
					/^t/i,
					/^qua/i,
					/^qui/i,
					/^sex/i,
					/^s[áa]/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
				any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^meia/i,
				noon: /^meio/i,
				morning: /manh[ãa]/i,
				afternoon: /tarde/i,
				evening: /noite/i,
				night: /madrugada/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 4
	}
};
//#endregion
//#region node_modules/date-fns/locale/zh-CN/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "不到 1 秒",
		other: "不到 {{count}} 秒"
	},
	xSeconds: {
		one: "1 秒",
		other: "{{count}} 秒"
	},
	halfAMinute: "半分钟",
	lessThanXMinutes: {
		one: "不到 1 分钟",
		other: "不到 {{count}} 分钟"
	},
	xMinutes: {
		one: "1 分钟",
		other: "{{count}} 分钟"
	},
	xHours: {
		one: "1 小时",
		other: "{{count}} 小时"
	},
	aboutXHours: {
		one: "大约 1 小时",
		other: "大约 {{count}} 小时"
	},
	xDays: {
		one: "1 天",
		other: "{{count}} 天"
	},
	aboutXWeeks: {
		one: "大约 1 个星期",
		other: "大约 {{count}} 个星期"
	},
	xWeeks: {
		one: "1 个星期",
		other: "{{count}} 个星期"
	},
	aboutXMonths: {
		one: "大约 1 个月",
		other: "大约 {{count}} 个月"
	},
	xMonths: {
		one: "1 个月",
		other: "{{count}} 个月"
	},
	aboutXYears: {
		one: "大约 1 年",
		other: "大约 {{count}} 年"
	},
	xYears: {
		one: "1 年",
		other: "{{count}} 年"
	},
	overXYears: {
		one: "超过 1 年",
		other: "超过 {{count}} 年"
	},
	almostXYears: {
		one: "将近 1 年",
		other: "将近 {{count}} 年"
	}
};
var formatDistance$1 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options?.addSuffix) {
		if (options.comparison && options.comparison > 0) return result + "内";
		else return result + "前";
	}
	return result;
};
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/zh-CN/_lib/formatRelative.js
function checkWeek(date, baseDate, options) {
	const baseFormat = "eeee p";
	if (isSameWeek(date, baseDate, options)) return baseFormat;
	else if (date.getTime() > baseDate.getTime()) return "'下个'eeee p";
	return "'上个'eeee p";
}
var formatRelativeLocale = {
	lastWeek: checkWeek,
	yesterday: "'昨天' p",
	today: "'今天' p",
	tomorrow: "'明天' p",
	nextWeek: checkWeek,
	other: "PP p"
};
var formatRelative = (token, date, baseDate, options) => {
	const format = formatRelativeLocale[token];
	if (typeof format === "function") return format(date, baseDate, options);
	return format;
};
//#endregion
//#region node_modules/date-fns/locale/zh-CN/_lib/localize.js
var eraValues = {
	narrow: ["前", "公元"],
	abbreviated: ["前", "公元"],
	wide: ["公元前", "公元"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"第一季",
		"第二季",
		"第三季",
		"第四季"
	],
	wide: [
		"第一季度",
		"第二季度",
		"第三季度",
		"第四季度"
	]
};
var monthValues = {
	narrow: [
		"一",
		"二",
		"三",
		"四",
		"五",
		"六",
		"七",
		"八",
		"九",
		"十",
		"十一",
		"十二"
	],
	abbreviated: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	],
	wide: [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月"
	]
};
var dayValues = {
	narrow: [
		"日",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六"
	],
	short: [
		"日",
		"一",
		"二",
		"三",
		"四",
		"五",
		"六"
	],
	abbreviated: [
		"周日",
		"周一",
		"周二",
		"周三",
		"周四",
		"周五",
		"周六"
	],
	wide: [
		"星期日",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "上",
		pm: "下",
		midnight: "凌晨",
		noon: "午",
		morning: "早",
		afternoon: "下午",
		evening: "晚",
		night: "夜"
	},
	abbreviated: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	},
	wide: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "上",
		pm: "下",
		midnight: "凌晨",
		noon: "午",
		morning: "早",
		afternoon: "下午",
		evening: "晚",
		night: "夜"
	},
	abbreviated: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	},
	wide: {
		am: "上午",
		pm: "下午",
		midnight: "凌晨",
		noon: "中午",
		morning: "早晨",
		afternoon: "中午",
		evening: "晚上",
		night: "夜间"
	}
};
var ordinalNumber = (dirtyNumber, options) => {
	const number = Number(dirtyNumber);
	switch (options?.unit) {
		case "date": return number.toString() + "日";
		case "hour": return number.toString() + "时";
		case "minute": return number.toString() + "分";
		case "second": return number.toString() + "秒";
		default: return "第 " + number.toString();
	}
};
//#endregion
//#region node_modules/date-fns/locale/zh-CN.js
/**
* @category Locales
* @summary Chinese Simplified locale.
* @language Chinese Simplified
* @iso-639-2 zho
* @author Changyu Geng [@KingMario](https://github.com/KingMario)
* @author Song Shuoyun [@fnlctrl](https://github.com/fnlctrl)
* @author sabrinaM [@sabrinamiao](https://github.com/sabrinamiao)
* @author Carney Wu [@cubicwork](https://github.com/cubicwork)
* @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
*/
var zhCN = {
	code: "zh-CN",
	formatDistance: formatDistance$1,
	formatLong,
	formatRelative,
	localize: {
		ordinalNumber,
		era: buildLocalizeFn({
			values: eraValues,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues,
			defaultWidth: "wide",
			argumentCallback: (quarter) => quarter - 1
		}),
		month: buildLocalizeFn({
			values: monthValues,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues,
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(前)/i,
				abbreviated: /^(前)/i,
				wide: /^(公元前|公元)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^第[一二三四]刻/i,
				wide: /^第[一二三四]刻钟/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/(1|一)/i,
				/(2|二)/i,
				/(3|三)/i,
				/(4|四)/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^(一|二|三|四|五|六|七|八|九|十[二一]?)/i,
				abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]?|\d|1[0-2])月/i,
				wide: /^(一|二|三|四|五|六|七|八|九|十[二一]?)月/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^一/i,
					/^二/i,
					/^三/i,
					/^四/i,
					/^五/i,
					/^六/i,
					/^七/i,
					/^八/i,
					/^九/i,
					/^十(?!(一|二))/i,
					/^十一/i,
					/^十二/i
				],
				any: [
					/^(一|1(?!\d))/i,
					/^(二|2)/i,
					/^(三|3)/i,
					/^(四|4)/i,
					/^(五|5)/i,
					/^(六|6)/i,
					/^(七|7)/i,
					/^(八|8)/i,
					/^(九|9)/i,
					/^(十(?!(一|二))|10)/i,
					/^(十一|11)/i,
					/^(十二|12)/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[一二三四五六日]/i,
				short: /^[一二三四五六日]/i,
				abbreviated: /^周[一二三四五六日]/i,
				wide: /^星期[一二三四五六日]/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/日/i,
				/一/i,
				/二/i,
				/三/i,
				/四/i,
				/五/i,
				/六/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^上午?/i,
				pm: /^下午?/i,
				midnight: /^午夜/i,
				noon: /^[中正]午/i,
				morning: /^早上/i,
				afternoon: /^下午/i,
				evening: /^晚上?/i,
				night: /^凌晨/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
/**
* @name compareAsc
* @category Common Helpers
* @summary Compare the two dates and return -1, 0 or 1.
*
* @description
* Compare the two dates and return 1 if the first date is after the second,
* -1 if the first date is before the second or 0 if dates are equal.
*
* @param dateLeft - The first date to compare
* @param dateRight - The second date to compare
*
* @returns The result of the comparison
*
* @example
* // Compare 11 February 1987 and 10 July 1989:
* const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
* //=> -1
*
* @example
* // Sort the array of dates:
* const result = [
*   new Date(1995, 6, 2),
*   new Date(1987, 1, 11),
*   new Date(1989, 6, 10)
* ].sort(compareAsc)
* //=> [
* //   Wed Feb 11 1987 00:00:00,
* //   Mon Jul 10 1989 00:00:00,
* //   Sun Jul 02 1995 00:00:00
* // ]
*/
function compareAsc(dateLeft, dateRight) {
	const diff = +toDate(dateLeft) - +toDate(dateRight);
	if (diff < 0) return -1;
	else if (diff > 0) return 1;
	return diff;
}
//#endregion
//#region node_modules/date-fns/constructNow.js
/**
* @name constructNow
* @category Generic Helpers
* @summary Constructs a new current date using the passed value constructor.
* @pure false
*
* @description
* The function constructs a new current date using the constructor from
* the reference date. It helps to build generic functions that accept date
* extensions and use the current date.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* @param date - The reference date to take constructor from
*
* @returns Current date initialized using the given date constructor
*
* @example
* import { constructNow, isSameDay } from 'date-fns'
*
* function isToday<DateType extends Date>(
*   date: DateArg<DateType>,
* ): boolean {
*   // If we were to use `new Date()` directly, the function would  behave
*   // differently in different timezones and return false for the same date.
*   return isSameDay(date, constructNow(date));
* }
*/
function constructNow(date) {
	return constructFrom(date, Date.now());
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarMonths.js
/**
* The {@link differenceInCalendarMonths} function options.
*/
/**
* @name differenceInCalendarMonths
* @category Month Helpers
* @summary Get the number of calendar months between the given dates.
*
* @description
* Get the number of calendar months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of calendar months
*
* @example
* // How many calendar months are between 31 January 2014 and 1 September 2014?
* const result = differenceInCalendarMonths(
*   new Date(2014, 8, 1),
*   new Date(2014, 0, 31)
* )
* //=> 8
*/
function differenceInCalendarMonths(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
	const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
	return yearsDiff * 12 + monthsDiff;
}
//#endregion
//#region node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
	return (number) => {
		const result = (method ? Math[method] : Math.trunc)(number);
		return result === 0 ? 0 : result;
	};
}
//#endregion
//#region node_modules/date-fns/differenceInMilliseconds.js
/**
* @name differenceInMilliseconds
* @category Millisecond Helpers
* @summary Get the number of milliseconds between the given dates.
*
* @description
* Get the number of milliseconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
*
* @returns The number of milliseconds
*
* @example
* // How many milliseconds are between
* // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
* const result = differenceInMilliseconds(
*   new Date(2014, 6, 2, 12, 30, 21, 700),
*   new Date(2014, 6, 2, 12, 30, 20, 600)
* )
* //=> 1100
*/
function differenceInMilliseconds(laterDate, earlierDate) {
	return +toDate(laterDate) - +toDate(earlierDate);
}
//#endregion
//#region node_modules/date-fns/endOfDay.js
/**
* The {@link endOfDay} function options.
*/
/**
* @name endOfDay
* @category Day Helpers
* @summary Return the end of a day for the given date.
*
* @description
* Return the end of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a day
*
* @example
* // The end of a day for 2 September 2014 11:55:00:
* const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 23:59:59.999
*/
function endOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/isLastDayOfMonth.js
/**
* @name isLastDayOfMonth
* @category Month Helpers
* @summary Is the given date the last day of a month?
*
* @description
* Is the given date the last day of a month?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is the last day of a month
*
* @example
* // Is 28 February 2014 the last day of a month?
* const result = isLastDayOfMonth(new Date(2014, 1, 28))
* //=> true
*/
function isLastDayOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
//#endregion
//#region node_modules/date-fns/differenceInMonths.js
/**
* The {@link differenceInMonths} function options.
*/
/**
* @name differenceInMonths
* @category Month Helpers
* @summary Get the number of full months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full months
*
* @example
* // How many full months are between 31 January 2014 and 1 September 2014?
* const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
* //=> 7
*/
function differenceInMonths(laterDate, earlierDate, options) {
	const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
	const sign = compareAsc(workingLaterDate, earlierDate_);
	const difference = Math.abs(differenceInCalendarMonths(workingLaterDate, earlierDate_));
	if (difference < 1) return 0;
	if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
	workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
	let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
	if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
	const result = sign * (difference - +isLastMonthNotFull);
	return result === 0 ? 0 : result;
}
//#endregion
//#region node_modules/date-fns/differenceInSeconds.js
/**
* The {@link differenceInSeconds} function options.
*/
/**
* @name differenceInSeconds
* @category Second Helpers
* @summary Get the number of seconds between the given dates.
*
* @description
* Get the number of seconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options.
*
* @returns The number of seconds
*
* @example
* // How many seconds are between
* // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
* const result = differenceInSeconds(
*   new Date(2014, 6, 2, 12, 30, 20, 0),
*   new Date(2014, 6, 2, 12, 30, 7, 999)
* )
* //=> 12
*/
function differenceInSeconds(laterDate, earlierDate, options) {
	const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region node_modules/date-fns/formatDistance.js
/**
* The {@link formatDistance} function options.
*/
/**
* @name formatDistance
* @category Common Helpers
* @summary Return the distance between the given dates in words.
*
* @description
* Return the distance between the given dates in words.
*
* | Distance between dates                                            | Result              |
* |-------------------------------------------------------------------|---------------------|
* | 0 ... 30 secs                                                     | less than a minute  |
* | 30 secs ... 1 min 30 secs                                         | 1 minute            |
* | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
* | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
* | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
* | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
* | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
* | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
* | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
* | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
* | 1 yr ... 1 yr 3 months                                            | about 1 year        |
* | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
* | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
* | N yrs ... N yrs 3 months                                          | about N years       |
* | N yrs 3 months ... N yrs 9 months                                 | over N years        |
* | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
*
* With `options.includeSeconds == true`:
* | Distance between dates | Result               |
* |------------------------|----------------------|
* | 0 secs ... 5 secs      | less than 5 seconds  |
* | 5 secs ... 10 secs     | less than 10 seconds |
* | 10 secs ... 20 secs    | less than 20 seconds |
* | 20 secs ... 40 secs    | half a minute        |
* | 40 secs ... 60 secs    | less than a minute   |
* | 60 secs ... 90 secs    | 1 minute             |
*
* @param laterDate - The date
* @param earlierDate - The date to compare with
* @param options - An object with options
*
* @returns The distance in words
*
* @throws `date` must not be Invalid Date
* @throws `baseDate` must not be Invalid Date
* @throws `options.locale` must contain `formatDistance` property
*
* @example
* // What is the distance between 2 July 2014 and 1 January 2015?
* const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
* //=> '6 months'
*
* @example
* // What is the distance between 1 January 2015 00:00:15
* // and 1 January 2015 00:00:00, including seconds?
* const result = formatDistance(
*   new Date(2015, 0, 1, 0, 0, 15),
*   new Date(2015, 0, 1, 0, 0, 0),
*   { includeSeconds: true }
* )
* //=> 'less than 20 seconds'
*
* @example
* // What is the distance from 1 January 2016
* // to 1 January 2015, with a suffix?
* const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
*   addSuffix: true
* })
* //=> 'about 1 year ago'
*
* @example
* // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
* import { eoLocale } from 'date-fns/locale/eo'
* const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
*   locale: eoLocale
* })
* //=> 'pli ol 1 jaro'
*/
function formatDistance(laterDate, earlierDate, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const minutesInAlmostTwoDays = 2520;
	const comparison = compareAsc(laterDate, earlierDate);
	if (isNaN(comparison)) throw new RangeError("Invalid time value");
	const localizeOptions = Object.assign({}, options, {
		addSuffix: options?.addSuffix,
		comparison
	});
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]);
	const seconds = differenceInSeconds(earlierDate_, laterDate_);
	const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
	const minutes = Math.round((seconds - offsetInSeconds) / 60);
	let months;
	if (minutes < 2) {
		if (options?.includeSeconds) {
			if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
			else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
			else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
			else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
			else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
			else return locale.formatDistance("xMinutes", 1, localizeOptions);
		} else if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
		else return locale.formatDistance("xMinutes", minutes, localizeOptions);
	} else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
	else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
	else if (minutes < 1440) {
		const hours = Math.round(minutes / 60);
		return locale.formatDistance("aboutXHours", hours, localizeOptions);
	} else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
	else if (minutes < 43200) {
		const days = Math.round(minutes / minutesInDay);
		return locale.formatDistance("xDays", days, localizeOptions);
	} else if (minutes < 86400) {
		months = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("aboutXMonths", months, localizeOptions);
	}
	months = differenceInMonths(earlierDate_, laterDate_);
	if (months < 12) {
		const nearestMonth = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
	} else {
		const monthsSinceStartOfYear = months % 12;
		const years = Math.trunc(months / 12);
		if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
		else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
		else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
	}
}
//#endregion
//#region node_modules/date-fns/formatDistanceToNow.js
/**
* The {@link formatDistanceToNow} function options.
*/
/**
* @name formatDistanceToNow
* @category Common Helpers
* @summary Return the distance between the given date and now in words.
* @pure false
*
* @description
* Return the distance between the given date and now in words.
*
* | Distance to now                                                   | Result              |
* |-------------------------------------------------------------------|---------------------|
* | 0 ... 30 secs                                                     | less than a minute  |
* | 30 secs ... 1 min 30 secs                                         | 1 minute            |
* | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
* | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
* | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
* | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
* | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
* | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
* | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
* | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
* | 1 yr ... 1 yr 3 months                                            | about 1 year        |
* | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
* | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
* | N yrs ... N yrs 3 months                                          | about N years       |
* | N yrs 3 months ... N yrs 9 months                                 | over N years        |
* | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
*
* With `options.includeSeconds == true`:
* | Distance to now     | Result               |
* |---------------------|----------------------|
* | 0 secs ... 5 secs   | less than 5 seconds  |
* | 5 secs ... 10 secs  | less than 10 seconds |
* | 10 secs ... 20 secs | less than 20 seconds |
* | 20 secs ... 40 secs | half a minute        |
* | 40 secs ... 60 secs | less than a minute   |
* | 60 secs ... 90 secs | 1 minute             |
*
* @param date - The given date
* @param options - The object with options
*
* @returns The distance in words
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `formatDistance` property
*
* @example
* // If today is 1 January 2015, what is the distance to 2 July 2014?
* const result = formatDistanceToNow(
*   new Date(2014, 6, 2)
* )
* //=> '6 months'
*
* @example
* // If now is 1 January 2015 00:00:00,
* // what is the distance to 1 January 2015 00:00:15, including seconds?
* const result = formatDistanceToNow(
*   new Date(2015, 0, 1, 0, 0, 15),
*   {includeSeconds: true}
* )
* //=> 'less than 20 seconds'
*
* @example
* // If today is 1 January 2015,
* // what is the distance to 1 January 2016, with a suffix?
* const result = formatDistanceToNow(
*   new Date(2016, 0, 1),
*   {addSuffix: true}
* )
* //=> 'in about 1 year'
*
* @example
* // If today is 1 January 2015,
* // what is the distance to 1 August 2016 in Esperanto?
* const eoLocale = require('date-fns/locale/eo')
* const result = formatDistanceToNow(
*   new Date(2016, 7, 1),
*   {locale: eoLocale}
* )
* //=> 'pli ol 1 jaro'
*/
function formatDistanceToNow(date, options) {
	return formatDistance(date, constructNow(date), options);
}
//#endregion
export { fr as a, de as c, ja as i, arSA as l, zhCN as n, es as o, pt as r, enUS as s, formatDistanceToNow as t };
