import React, { useEffect, useMemo, useState } from "react";
import ControlPanel from "../ControlPanel";
import Search from "@/components/shared/search";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Modal from "@/components/shared/modal/Modal";
import {
  useGetSessionQuery,
  useGetSessionsQuery
} from "@/services/session/sessionApi";
import { toast } from "react-hot-toast";

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

const badgeStyles = [
  "bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200",
  "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  "bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200",
  "bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200",
  "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
];

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
              <div className="hidden lg:block lg:col-span-2">
                <p>
                  {session.device?.type || "-"} / {session.browser?.name || "-"}
                </p>
                <p className="text-xs text-gray-500">{session.os?.name || "-"}</p>
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

const Badge = ({ label, value, tone = 0 }) => (
  <span
    className={`inline-flex max-w-full flex-col gap-1 rounded-lg px-3 py-2 text-sm ${badgeStyles[tone % badgeStyles.length]}`}
  >
    <span className="text-[11px] opacity-75">{label}</span>
    <span className="break-words font-medium">{value || "-"}</span>
  </span>
);

const SessionDetailsModal = ({ isLoading, onClose, session, show }) => (
  <Modal
    isOpen={show}
    onClose={onClose}
    className="!h-[85vh] w-full max-w-4xl p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
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
        <>
          <div className="flex flex-wrap gap-2">
            <Badge label="شناسه نشست" value={session.sessionId} tone={0} />
            <Badge label="کاربر" value={session.userId} tone={1} />
            <Badge label="نقش" value={session.role || "buyer"} tone={2} />
            <Badge label="IP" value={session.ip} tone={3} />
            <Badge label="مکان" value={locationLabel(session)} tone={4} />
            <Badge
              label="مرورگر"
              value={`${session.browser?.name || "-"} ${session.browser?.version || ""}`}
              tone={5}
            />
            <Badge
              label="سیستم عامل"
              value={`${session.os?.name || "-"} ${session.os?.version || ""}`}
              tone={0}
            />
            <Badge label="دستگاه" value={session.device?.type} tone={1} />
            <Badge
              label="زبان / منطقه زمانی"
              value={`${session.language || "-"} / ${session.timezone || "-"}`}
              tone={2}
            />
            <Badge
              label="صفحه نمایش"
              value={
                session.screen?.width
                  ? `${session.screen.width}x${session.screen.height} @${session.screen.pixelRatio || 1}`
                  : "-"
              }
              tone={3}
            />
            <Badge label="صفحه ورود" value={session.landingPage} tone={4} />
            <Badge label="آخرین صفحه" value={session.lastPage} tone={5} />
            <Badge label="ارجاع" value={session.referrer || "ورود مستقیم"} tone={0} />
            <Badge
              label="اولین حضور"
              value={formatDate(session.firstSeenAt || session.createdAt)}
              tone={1}
            />
            <Badge
              label="آخرین حضور"
              value={formatDate(session.lastSeenAt || session.updatedAt)}
              tone={2}
            />
            <Badge label="زمان حضور" value={formatDuration(session.totalDurationMs)} tone={3} />
            <Badge label="بازدید صفحات" value={`${session.pageViewCount || 0} بازدید`} tone={4} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
              مسیرهای بازدید شده
            </h3>
            <div className="space-y-2">
              {[...(session.pageViews || [])].reverse().slice(0, 30).map((view, index) => (
                <div
                  key={`${view.createdAt}-${index}`}
                  className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800"
                >
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge label="عنوان" value={view.title || view.path || "-"} tone={index} />
                    <Badge label="رویداد" value={view.event || "pageview"} tone={index + 1} />
                    <Badge label="مدت حضور" value={formatDuration(view.durationMs)} tone={index + 2} />
                    <Badge label="زمان" value={formatDate(view.createdAt)} tone={index + 3} />
                  </div>
                  <p className="break-words text-xs text-gray-600 dark:text-gray-300">
                    {view.path || view.url || "-"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  </Modal>
);

export default Sessions;
