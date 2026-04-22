import { useState, useMemo } from "react";
import { IconArrowRight } from "./Icon";

export type TimeSlot = {
  date: string;
  hour: number;
};

type Props = {
  value: TimeSlot[];
  onChange: (slots: TimeSlot[]) => void;
  max?: number;
};

// 対応時間 8:00-21:00 の1時間枠(開始時刻ベース、最終枠 20:00-21:00)
const HOURS = Array.from({ length: 13 }, (_, i) => i + 8);
const DAY_LABELS = ["月", "火", "水", "木", "金", "土", "日"];

// 打ち合わせ/研修/セミナー前後に確保するバッファ(時間)
const BUFFER_HOURS = 1;

type BusyCategory = "meeting" | "training" | "seminar";

type BusyEvent = {
  date: string;
  startHour: number;
  endHour: number;
  category: BusyCategory;
};

// Phase1モック。将来 michey0495@gmail.com + mitsuki.yasuda@givery.co.jp のGoogle Calendarから取得した予定で差し替える
function generateMockBusy(): BusyEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = today.getDay();
  const diffToMon = day === 0 ? 6 : day - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - diffToMon);

  const rel = (n: number) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + n);
    return formatDateKey(d);
  };

  return [
    // 今週
    { date: rel(0), startHour: 10, endHour: 12, category: "meeting" },
    { date: rel(2), startHour: 13, endHour: 17, category: "training" },
    { date: rel(4), startHour: 15, endHour: 16, category: "seminar" },
    { date: rel(5), startHour: 10, endHour: 11, category: "meeting" },
    // 翌週
    { date: rel(8), startHour: 9, endHour: 12, category: "training" },
    { date: rel(9), startHour: 14, endHour: 15, category: "meeting" },
    { date: rel(10), startHour: 10, endHour: 11, category: "meeting" },
    { date: rel(12), startHour: 13, endHour: 17, category: "seminar" },
    // さらに先
    { date: rel(15), startHour: 9, endHour: 12, category: "training" },
    { date: rel(17), startHour: 14, endHour: 18, category: "training" },
    { date: rel(22), startHour: 10, endHour: 11, category: "meeting" },
    { date: rel(24), startHour: 13, endHour: 14, category: "seminar" },
  ];
}

const MOCK_BUSY = generateMockBusy();

function isAvailable(d: Date, hour: number): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (d < today) return false;

  const dateKey = formatDateKey(d);
  const slotStart = hour;
  const slotEnd = hour + 1;

  for (const event of MOCK_BUSY) {
    if (event.date !== dateKey) continue;
    const blockedStart = event.startHour - BUFFER_HOURS;
    const blockedEnd = event.endHour + BUFFER_HOURS;
    if (slotStart < blockedEnd && slotEnd > blockedStart) return false;
  }
  return true;
}

function startOfWeek(d: Date): Date {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  const day = date.getDay();
  const diff = day === 0 ? 6 : day - 1;
  date.setDate(date.getDate() - diff);
  return date;
}

function addDays(d: Date, n: number): Date {
  const date = new Date(d);
  date.setDate(date.getDate() + n);
  return date;
}

function formatDateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatMonthDay(d: Date): string {
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export function formatSlotLabel(slot: TimeSlot): string {
  const [y, m, d] = slot.date.split("-").map((n) => parseInt(n, 10));
  const date = new Date(y, m - 1, d);
  const label = DAY_LABELS[(date.getDay() + 6) % 7];
  return `${m}/${d}(${label}) ${slot.hour}:00-${slot.hour + 1}:00`;
}

export function CalendarPicker({ value, onChange, max = 3 }: Props) {
  const [weekStart, setWeekStart] = useState<Date>(() => {
    const today = new Date();
    const start = startOfWeek(today);
    return start;
  });

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart]
  );

  const toggleSlot = (date: string, hour: number) => {
    const exists = value.find((v) => v.date === date && v.hour === hour);
    if (exists) {
      onChange(value.filter((v) => !(v.date === date && v.hour === hour)));
      return;
    }
    if (value.length >= max) return;
    onChange([...value, { date, hour }]);
  };

  const pickIndex = (date: string, hour: number): number => {
    return value.findIndex((v) => v.date === date && v.hour === hour);
  };

  const weekLabel = `${weekStart.getFullYear()}年${weekStart.getMonth() + 1}月 / ${formatMonthDay(weekStart)} - ${formatMonthDay(addDays(weekStart, 6))}`;

  return (
    <div className="rounded-2xl border border-ink-200 bg-white overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100 bg-ink-50/60 gap-2">
        <button
          type="button"
          onClick={() => setWeekStart(addDays(weekStart, -7))}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-ink-200 text-ink-700 hover:text-brand-600 hover:border-brand-300 transition-colors"
          aria-label="前週"
        >
          <IconArrowRight className="w-4 h-4 rotate-180" />
        </button>
        <div className="text-sm font-bold text-ink-900 tabular-nums">{weekLabel}</div>
        <button
          type="button"
          onClick={() => setWeekStart(addDays(weekStart, 7))}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-ink-200 text-ink-700 hover:text-brand-600 hover:border-brand-300 transition-colors"
          aria-label="翌週"
        >
          <IconArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-center border-collapse min-w-[520px]">
          <thead>
            <tr>
              <th className="p-2 bg-white sticky left-0 w-14 border-b border-ink-100"></th>
              {days.map((d, i) => {
                const day = d.getDay();
                const isToday = formatDateKey(d) === formatDateKey(new Date());
                return (
                  <th
                    key={i}
                    className={`p-2 border-b border-ink-100 font-normal ${
                      day === 0
                        ? "text-coral-500"
                        : day === 6
                          ? "text-brand-600"
                          : "text-ink-700"
                    }`}
                  >
                    <div className="text-[11px]">{DAY_LABELS[i]}</div>
                    <div
                      className={`mt-0.5 inline-flex h-6 min-w-[28px] items-center justify-center rounded-full px-1 font-bold ${
                        isToday ? "bg-brand-500 text-white" : ""
                      }`}
                    >
                      {formatMonthDay(d)}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {HOURS.map((h) => (
              <tr key={h}>
                <th className="p-1 bg-white font-normal text-[11px] text-ink-500 sticky left-0 w-14 border-t border-ink-100">
                  {h}:00
                </th>
                {days.map((d, i) => {
                  const ds = formatDateKey(d);
                  const avail = isAvailable(d, h);
                  const idx = pickIndex(ds, h);
                  const picked = idx >= 0;
                  const reachedMax = value.length >= max && !picked;
                  return (
                    <td key={i} className="p-0.5 border-t border-ink-100">
                      <button
                        type="button"
                        disabled={!avail || reachedMax}
                        onClick={() => toggleSlot(ds, h)}
                        className={[
                          "w-full h-8 rounded-md text-[11px] font-semibold transition-colors",
                          picked
                            ? "bg-brand-500 text-white shadow-sm"
                            : avail
                              ? reachedMax
                                ? "bg-ink-50/60 text-ink-300 cursor-not-allowed"
                                : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                              : "bg-ink-50/40 text-ink-300 cursor-not-allowed",
                        ].join(" ")}
                        aria-label={`${ds} ${h}:00 ${picked ? `選択中 第${idx + 1}希望` : avail ? "空き" : "埋まっています"}`}
                      >
                        {picked ? `第${idx + 1}希望` : avail ? "○" : "—"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 border-t border-ink-100 bg-ink-50/40 text-[11px] text-ink-500 flex flex-wrap items-center justify-between gap-2">
        <span>対応時間 8:00〜21:00(最大60分) / 先約・研修・セミナーの前後1時間は自動で除外</span>
        <span className="font-semibold text-ink-700 tabular-nums">
          選択中 {value.length} / {max}
        </span>
      </div>
    </div>
  );
}
