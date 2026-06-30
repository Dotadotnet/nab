import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import ControlPanel from "../ControlPanel";
import Search from "@/components/shared/search";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Modal from "@/components/shared/modal/Modal";
import {
  useGetSessionQuery,
  useGetSessionsQuery
} from "@/services/session/sessionApi";

function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleString("fa-IR");
}

function formatDuration(ms = 0) {
  const totalSeconds = Math.floor((Number(ms) || 0) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours) return `${hours} ساعت و ${minutes} دقیقه`;
  if (minutes) return `${minutes} دقیقه و ${seconds} ثانیه`;
  return `${seconds} ثانیه`;
}

function locationLabel(session) {
  return (
    [session?.location?.country, session?.location?.region, session?.location?.city]
      .filter(Boolean)
      .join("، ") || "-"
  );
}

function activityTitle(view) {
  if (view?.event === "click") {
    return view.click?.trackingKey || view.click?.text || view.click?.href || "کلیک";
  }

  return view?.title || view?.path || "-";
}

function activityPath(view) {
  if (view?.event === "click") {
    return [view.click?.tag, view.click?.href || view.path || view.url].filter(Boolean).join(" · ");
  }

  return view?.path || view?.url || "-";
}

function DeviceIcon({ type = "" }) {
  const normalizedType = type.toLowerCase();
  if (normalizedType === "mobile") return <Icon name="mobile" />;
  if (normalizedType === "tablet") return <Icon name="tablet" />;
  return <Icon name="desktop" />;
}

function BrowserIcon({ name = "" }) {
  const normalizedName = name.toLowerCase();
  if (normalizedName.includes("chrome")) return <Icon name="chrome" />;
  if (normalizedName.includes("firefox")) return <Icon name="firefox" />;
  if (normalizedName.includes("safari")) return <Icon name="safari" />;
  if (normalizedName.includes("edge")) return <Icon name="edge" />;
  return <Icon name="browser" />;
}

function OsIcon({ name = "" }) {
  const normalizedName = name.toLowerCase();
  if (normalizedName.includes("windows")) return <Icon name="windows" />;
  if (normalizedName.includes("android")) return <Icon name="android" />;
  if (normalizedName.includes("ios") || normalizedName.includes("mac")) return <Icon name="apple" />;
  if (normalizedName.includes("linux")) return <Icon name="linux" />;
  return <Icon name="os" />;
}

const iconPaths = {
  android: "M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7Zm2-4-1.5-2M15 6l1.5-2M8 10V8a4 4 0 0 1 8 0v2M5 11v5M19 11v5",
  apple: "M15 5c-1.5.2-2.8 1.3-3.2 2.6M12 8c-2-1.4-5-.3-5 3.4 0 3.1 2.2 7.6 4.2 7.6.7 0 1.2-.4 2-.4.9 0 1.3.4 2 .4 1.8 0 3.8-3.9 4-6.6-2.3-.8-2.6-4.1-.2-5.2-1-1.6-2.7-2.3-4-2.2Z",
  browser: "M4 6h16v12H4V6Zm0 4h16M7 8h.01M10 8h.01",
  chrome: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.6 7.5h7.8M12 21l3.9-6.7M20 9H12.4",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2",
  desktop: "M4 5h16v11H4V5Zm6 15h4M12 16v4",
  edge: "M20 15c-1 3-3.7 5-7.4 5C8 20 4 17 4 12.2 4 7 8 4 12.4 4c3.8 0 6.6 2.4 7.2 5.6-2.6-2-6.8-1.4-8.4 1.6 2.4-1.1 6.8-.8 8.8 3.8Z",
  firefox: "M5 14c0 4 3.2 7 7 7s7-3 7-7c0-2.8-1.6-5-3.8-6.2.2 1.5-.5 2.4-1.7 3-1-2-2.7-3.5-5-4 .6 1 .5 2-.2 2.8C6.3 10 5 11.7 5 14Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2-2.1 3-5.1 3-9s-1-6.9-3-9m0 18c-2-2.1-3-5.1-3-9s1-6.9 3-9M3.6 9h16.8M3.6 15h16.8",
  linux: "M8 19c1-2.5 1.5-5 1.3-8-.2-3 1-5 2.7-5s2.9 2 2.7 5c-.2 3 .3 5.5 1.3 8M7 19h10M10 10h.01M14 10h.01",
  map: "M12 21s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  mobile: "M8 3h8v18H8V3Zm3 15h2",
  os: "M5 5h14v14H5V5Zm3 3h8v8H8V8Z",
  route: "M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 5h5a4 4 0 0 1 0 8h-1a4 4 0 0 0 0 8h6",
  safari: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-12-2 5-4 1 2-5 4-1Z",
  tablet: "M7 3h10v18H7V3Zm4 15h2",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0",
  windows: "M4 5l7-1v8H4V5Zm9-1 7-1v9h-7V4ZM4 14h7v8l-7-1v-7Zm9 0h7v9l-7-1v-8Z"
};

function Icon({ name }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name] || iconPaths.browser} />
    </svg>
  );
}

const Sessions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSessionId, setSelectedSessionId] = useState("");
  const limit = 10;

  const { data, isLoading, error } = useGetSessionsQuery({
    page: currentPage,
    limit,
    search: searchTerm
  });
  const { data: detailData, isFetching: detailLoading } = useGetSessionQuery(
    selectedSessionId,
    { skip: !selectedSessionId }
  );

  const sessions = useMemo(() => data?.data?.sessions || [], [data]);
  const selectedSession = detailData?.data;
  const stats = data?.data?.stats || {};
  const total = data?.data?.total || 0;
  const totalPages = data?.data?.totalPages || 1;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (isLoading) toast.loading("در حال دریافت نشست‌ها...", { id: "sessions" });
    if (data) toast.success("نشست‌ها دریافت شد", { id: "sessions" });
    if (error?.data) {
      toast.error(error.data.description || error.data.message, { id: "sessions" });
    }
  }, [data, error, isLoading]);

  return (
    <ControlPanel>
      <section className="flex flex-col gap-y-5">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <StatCard label="کل نشست‌ها" value={total} />
          <StatCard label="فعال در ۲۴ ساعت" value={stats.activeToday || 0} />
          <StatCard label="بازدید صفحات" value={stats.totalPageViews || 0} />
          <StatCard label="زمان حضور کل" value={formatDuration(stats.totalDurationMs)} />
        </div>

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onStatusFilterChange={() => {}}
        />

        <div className="grid grid-cols-12 px-4 text-sm text-slate-400">
          <span className="col-span-4 lg:col-span-2">کاربر</span>
          <span className="hidden lg:block lg:col-span-2">مکان / IP</span>
          <span className="hidden lg:block lg:col-span-2">دستگاه</span>
          <span className="col-span-5 lg:col-span-3">آخرین صفحه</span>
          <span className="hidden lg:block lg:col-span-2">زمان / بازدید</span>
          <span className="col-span-3 lg:col-span-1">آخرین حضور</span>
        </div>

        {isLoading ? (
          <SkeletonItem repeat={6} />
        ) : sessions.length ? (
          sessions.map((session) => (
            <article
              key={session._id}
              onClick={() => setSelectedSessionId(session._id)}
              className="grid cursor-pointer grid-cols-12 gap-2 rounded-xl border border-gray-200 bg-white p-4 text-sm transition hover:border-green-200 hover:bg-green-50/70 dark:border-white/10 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-gray-900"
            >
              <div className="col-span-4 lg:col-span-2">
                <p className="line-clamp-1 font-semibold">{session.userId || "-"}</p>
                <p className="text-xs text-gray-500">{session.role || "buyer"}</p>
              </div>
              <div className="hidden lg:block lg:col-span-2">
                <p className="line-clamp-1">{locationLabel(session)}</p>
                <p className="text-xs text-gray-500">{session.ip || "-"}</p>
              </div>
              <div className="hidden lg:flex lg:col-span-2 lg:items-center lg:gap-2">
                <DeviceIcon type={session.device?.type} />
                <div>
                  <p>{session.device?.type || "desktop"} / {session.browser?.name || "-"}</p>
                  <p className="text-xs text-gray-500">{session.os?.name || "-"}</p>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-3">
                <p className="line-clamp-1">
                  {session.lastPage || session.landingPage || "-"}
                </p>
                <p className="line-clamp-1 text-xs text-gray-500">
                  {session.referrer || "ورود مستقیم"}
                </p>
              </div>
              <div className="hidden lg:block lg:col-span-2">
                <p>{formatDuration(session.totalDurationMs)}</p>
                <p className="text-xs text-gray-500">{session.pageViewCount || 0} بازدید</p>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <p className="text-xs">{formatDate(session.lastSeenAt || session.updatedAt)}</p>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500 dark:border-white/10 dark:bg-slate-800">
            نشستی پیدا نشد
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={total}
          pageSize={limit}
          onPageChange={setCurrentPage}
          onPageSizeChange={() => {}}
        />

        <SessionDetailsModal
          isLoading={detailLoading}
          onClose={() => setSelectedSessionId("")}
          session={selectedSession}
          show={!!selectedSessionId}
        />
      </section>
    </ControlPanel>
  );
};

const StatCard = ({ label, value }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-slate-800">
    <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
    <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
  </div>
);

const DetailSection = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">{title}</h3>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const DetailBadge = ({ children, icon, label, tone = "gray" }) => {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-900/50",
    green: "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-800 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-900/50",
    gray: "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200 dark:hover:bg-gray-800",
    indigo: "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200 dark:hover:bg-indigo-900/50",
    purple: "border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-200 dark:hover:bg-purple-900/50",
    rose: "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-200 dark:hover:bg-rose-900/50",
    teal: "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-900/30 dark:text-teal-200 dark:hover:bg-teal-900/50",
    amber: "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-200 dark:hover:bg-amber-900/50"
  };

  return (
    <span className={`inline-flex max-w-full cursor-pointer items-center gap-1.5 overflow-hidden rounded-lg border px-2.5 py-1.5 text-sm transition-colors [&_*]:text-current [&_svg]:stroke-current ${tones[tone] || tones.gray}`}>
      {icon && <span className="shrink-0 text-current">{icon}</span>}
      <span className="inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap">
        <span className="shrink-0 text-current text-xs opacity-75">{label}</span>
        <span className="shrink-0 opacity-50">:</span>
        <span className="min-w-0 truncate text-current font-medium">{children || "-"}</span>
      </span>
    </span>
  );
};

const SessionDetailsModal = ({ isLoading, onClose, session, show }) => (
  <Modal
    isOpen={show}
    onClose={onClose}
    className="!h-[85vh] w-full max-w-3xl p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
  >
    <div className="text-right space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300">
          جزئیات نشست
        </h2>
        <button
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
          onClick={onClose}
          type="button"
        >
          بستن
        </button>
      </div>

      {isLoading || !session ? (
        <SkeletonItem repeat={4} />
      ) : (
        <div className="space-y-6">
          <DetailSection title="اطلاعات نشست">
            <DetailBadge label="شناسه نشست" tone="teal">
              {session.sessionId}
            </DetailBadge>
            <DetailBadge label="اولین حضور" icon={<Icon name="clock" />} tone="blue">
              {formatDate(session.firstSeenAt || session.createdAt)}
            </DetailBadge>
            <DetailBadge label="آخرین حضور" icon={<Icon name="clock" />} tone="indigo">
              {formatDate(session.lastSeenAt || session.updatedAt)}
            </DetailBadge>
            <DetailBadge label="زمان حضور" icon={<Icon name="clock" />} tone="green">
              {formatDuration(session.totalDurationMs)}
            </DetailBadge>
            <DetailBadge label="بازدید صفحات" icon={<Icon name="route" />} tone="purple">
              {session.pageViewCount || 0} بازدید
            </DetailBadge>
          </DetailSection>

          <DetailSection title="کاربر و موقعیت">
            <DetailBadge label="کاربر" icon={<Icon name="user" />} tone="indigo">
              {session.userId}
            </DetailBadge>
            <DetailBadge label="نقش" tone="amber">
              {session.role || "buyer"}
            </DetailBadge>
            <DetailBadge label="IP" icon={<Icon name="globe" />} tone="blue">
              {session.ip}
            </DetailBadge>
            <DetailBadge label="مکان" icon={<Icon name="map" />} tone="green">
              {locationLabel(session)}
            </DetailBadge>
          </DetailSection>

          <DetailSection title="دستگاه و مرورگر">
            <DetailBadge label="نوع دستگاه" icon={<DeviceIcon type={session.device?.type} />} tone="teal">
              {session.device?.type || "desktop"}
            </DetailBadge>
            <DetailBadge
              label="مرورگر"
              icon={<BrowserIcon name={session.browser?.name} />}
              tone="blue"
            >
              {`${session.browser?.name || "-"} ${session.browser?.version || ""}`}
            </DetailBadge>
            <DetailBadge label="سیستم عامل" icon={<OsIcon name={session.os?.name} />} tone="purple">
              {`${session.os?.name || "-"} ${session.os?.version || ""}`}
            </DetailBadge>
            <DetailBadge label="صفحه نمایش" icon={<Icon name="desktop" />} tone="rose">
              {session.screen?.width
                ? `${session.screen.width}x${session.screen.height} @${session.screen.pixelRatio || 1}`
                : "-"}
            </DetailBadge>
            <DetailBadge label="زبان / منطقه زمانی" tone="green">
              {`${session.language || "-"} / ${session.timezone || "-"}`}
            </DetailBadge>
          </DetailSection>

          <DetailSection title="ورود و ارجاع">
            <DetailBadge label="صفحه ورود" icon={<Icon name="route" />} tone="teal">
              {session.landingPage}
            </DetailBadge>
            <DetailBadge label="آخرین صفحه" icon={<Icon name="route" />} tone="blue">
              {session.lastPage}
            </DetailBadge>
            <DetailBadge label="ارجاع" icon={<Icon name="globe" />} tone="amber">
              {session.referrer || "ورود مستقیم"}
            </DetailBadge>
          </DetailSection>

          <div className="space-y-3">
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
              مسیرهای بازدید شده
            </h3>
            <div className="space-y-3">
              {[...(session.pageViews || [])].reverse().slice(0, 30).map((view, index) => (
                <div
                  key={`${view.createdAt}-${index}`}
                  className="space-y-2 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/30"
                >
                  <div className="flex flex-wrap gap-2">
                    <DetailBadge label={view.event === "click" ? "کلیک" : "عنوان"} tone="teal">
                      {activityTitle(view)}
                    </DetailBadge>
                    <DetailBadge label="رویداد" tone="rose">
                      {view.event || "pageview"}
                    </DetailBadge>
                    <DetailBadge label="مدت حضور" icon={<Icon name="clock" />} tone="green">
                      {formatDuration(view.durationMs)}
                    </DetailBadge>
                    <DetailBadge label="زمان" tone="amber">
                      {formatDate(view.createdAt)}
                    </DetailBadge>
                  </div>
                  <p className="break-words text-xs text-gray-600 dark:text-gray-300">
                    {activityPath(view)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </Modal>
);

export default Sessions;
