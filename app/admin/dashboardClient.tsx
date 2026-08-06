'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";

const blogChart = [
  { month: "Jan", blogs: 2 },
  { month: "Feb", blogs: 5 },
  { month: "Mar", blogs: 8 },
  { month: "Apr", blogs: 12 },
  { month: "May", blogs: 15 },
  { month: "Jun", blogs: 18 },
];

const enquiryChart = [
  { month: "Jan", enquiries: 10 },
  { month: "Feb", enquiries: 18 },
  { month: "Mar", enquiries: 25 },
  { month: "Apr", enquiries: 30 },
  { month: "May", enquiries: 42 },
  { month: "Jun", enquiries: 55 },
];

const galleryChart = [
  { month: "Jan", images: 12 },
  { month: "Feb", images: 18 },
  { month: "Mar", images: 25 },
  { month: "Apr", images: 20 },
  { month: "May", images: 35 },
  { month: "Jun", images: 42 },
  { month: "Jul", images: 30 },
  { month: "Aug", images: 48 },
];

const statusData = [
  { name: "Active", value: 18 },
  { name: "Inactive", value: 5 },
];



export default function DashboardHome() {
  const [stats, setStats] = useState({
  // categories: 0,
  blogs: 0,
  enquiries: 0,
  galleries: 0
});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchStats();
  }, [router]);

  const fetchStats = async () => {
    try {
      setLoading(true);
          const [blogsRes, enquiriesRes, galleriesRes] = await Promise.all([
      // fetch('/api/categories?limit=1'),
      fetch('/api/blogs?limit=1'),
      fetch('/api/enquiries?limit=1'),
      fetch('/api/gallery?limit=1')
    ]);

      
      //  const categories = await categoriesRes.json();
       const blogs = await blogsRes.json();
       const enquiries = await enquiriesRes.json();
       const galleries = await galleriesRes.json();

    setStats({
      // categories: categories.total || 0,
      blogs: blogs.total || 0,
      enquiries: enquiries.total || 0,
      galleries: galleries.total || 0
    });

    setError(false);
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    setError(true);
  } finally {
    setLoading(false);
  }
};

  const statCards = [
  {
    title: 'Total Blogs',
    value: stats.blogs,
    color: 'var(--accent-primary)',
    bg: 'rgba(99,102,241,0.1)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 17l9 4 9-4" />
        <path d="M3 12l9 4 9-4" />
      </svg>
    )
  },

{
    title: 'Total Enquiries',
    value: stats.enquiries,
    color: 'var(--accent-emerald)',
    bg: 'rgba(16,185,129,0.1)',
    icon: (
            <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
    )
  },
  {
    title: 'Total Gallery Images',
    value: stats.galleries,
    color: 'var(--accent-emerald)',
    bg: 'rgba(16,185,129,0.1)',
    icon: (
            <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="9" y="9" width="13" height="13" rx="2" />
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  <circle cx="16" cy="15" r="1.5" />
  <path d="M22 20l-3.5-3.5L13 22" />
</svg>
    )
  },
];

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">Dashboard Overview</h1>
       
        
        {error && (
          <div className="mt-6 p-6 bg-[rgba(244,63,94,0.05)] border border-[rgba(244,63,94,0.2)] rounded-2xl animate-fade-in shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[rgba(244,63,94,0.1)] rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--accent-rose)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Database Connection Failure</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-1 leading-relaxed">
                  The system is receiving <code className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded text-[var(--accent-rose)]">ECONNREFUSED</code> at <code className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded">127.0.0.1:3306</code>. 
                  Please ensure your <strong>MySQL Service</strong> is started and configured correctly.
                </p>
                <div className="mt-4 flex gap-3">
                  <button 
                    onClick={() => { setLoading(true); fetchStats(); }}
                    className="px-4 py-2 bg-[var(--accent-rose)] text-white text-xs font-bold rounded-lg hover:opacity-90 transition-all flex items-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                    Retry Connection
                  </button>
                  <a 
                    href="https://dev.mysql.com/doc/refman/8.0/en/starting-server.html" 
                    target="_blank"
                    className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-xs font-bold rounded-lg hover:text-[var(--text-primary)] transition-all"
                  >
                    Troubleshoot Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 card-hover shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-[10px] md:text-sm font-medium uppercase tracking-wider">{stat.title}</p>
                {loading ? (
                  <div className="h-8 md:h-10 w-20 md:w-24 skeleton mt-2" />
                ) : (
                  <p className="text-2xl md:text-4xl font-bold text-[var(--text-primary)] mt-1">{stat.value.toLocaleString()}</p>
                )}
              </div>
            <div className="rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white shrink-0 bg-gradient-to-br from-emerald-400 via-emerald-600 to-black shadow-lg">

 
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center gap-2">
              <span className="text-[var(--accent-emerald)] text-[10px] md:text-xs font-semibold flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Active
              </span>
              <span className="text-[var(--text-muted)] text-[10px] md:text-xs">Real-time data</span>
            </div>
          </div>
        ))}
      </div>

      
      {/* ================= Dashboard Analytics ================= */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4 mb-8">

  {/* Blog Growth */}
  <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Blog Growth
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Monthly published blogs
        </p>
      </div>
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={blogChart}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="blogs"
          stroke="#4F8EF7"
          strokeWidth={4}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Enquiries */}
  <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-lg">
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Monthly Enquiries
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Customer enquiries received
        </p>
      </div>
    </div>

    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={enquiryChart}>
        <defs>
         <linearGradient id="colorEnquiry">
  <stop offset="5%" stopColor="#7d1554" stopOpacity={0.9}/>
  <stop offset="95%" stopColor="#6f1c59" stopOpacity={0}/>
</linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="enquiries"
          stroke="#8b5cf6"
          strokeWidth={4}
          fill="url(#colorEnquiry)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>


  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">

 
</div>

</div>

<div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Quick Actions</h2>
          <p className="text-[var(--text-secondary)] text-xs md:text-sm mt-1">Frequently used management tools</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Link
            href="/admin/blogs"
            className="group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5 md:p-6 rounded-xl hover:border-[var(--accent-primary)] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 17l9 4 9-4" />
        <path d="M3 12l9 4 9-4" />
      </svg>
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[rgba(99,102,241,0.1)] text-[var(--accent-primary)] rounded-lg flex items-center justify-center mb-4">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 17l9 4 9-4" />
        <path d="M3 12l9 4 9-4" />
      </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-1">Manage Blogs</h3>
              <p className="text-[var(--text-secondary)] text-xs md:text-sm">Create, edit, activate or deactivate blog posts.</p>
            </div>
          </Link>
         <Link
            href="/admin/gallery"
            className="group relative overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5 md:p-6 rounded-xl hover:border-[var(--accent-primary)] transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 17l9 4 9-4" />
        <path d="M3 12l9 4 9-4" />
      </svg>
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-[rgba(99,102,241,0.1)] text-[var(--accent-primary)] rounded-lg flex items-center justify-center mb-4">
                       <svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="9" y="9" width="13" height="13" rx="2" />
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  <circle cx="16" cy="15" r="1.5" />
  <path d="M22 20l-3.5-3.5L13 22" />
</svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-1">Manage Gallery Images</h3>
              <p className="text-[var(--text-secondary)] text-xs md:text-sm">Create or edit gallery images.</p>
            </div>
          </Link>
        </div>
      </div>
{/* ================= Full Width Gallery Upload Analytics ================= */}
<div className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
        📸 Gallery Upload Analytics
      </h2>

      <p className="text-sm text-[var(--text-secondary)] mt-1">
        Monthly gallery image uploads overview
      </p>
    </div>

    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-red-700 flex items-center justify-center shadow-lg">
      <span className="text-2xl">📷</span>
    </div>

  </div>

  {/* Chart */}
  <div className="w-full h-[320px] sm:h-[420px] lg:h-[500px]">

    <ResponsiveContainer width="100%" height="100%">

      <BarChart
        data={galleryChart}
        layout="vertical"
        margin={{
          top: 10,
          right: 30,
          left: 10,
          bottom: 10,
        }}
      >

        {/* Gradient */}
        <defs>

          <linearGradient id="galleryGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

        </defs>

        {/* Grid */}
        <CartesianGrid
          strokeDasharray="4 4"
          stroke="#374151"
          horizontal={false}
        />

        {/* X Axis */}
        <XAxis
          type="number"
          stroke="#94a3b8"
          tick={{
            fill: "#94a3b8",
            fontSize: 13,
          }}
        />

        {/* Y Axis */}
        <YAxis
          type="category"
          dataKey="month"
          width={80}
          stroke="#94a3b8"
          tick={{
            fill: "#94a3b8",
            fontSize: 13,
            fontWeight: 600,
          }}
        />

        {/* Tooltip */}
        <Tooltip
          cursor={{
            fill: "rgba(239,68,68,0.08)",
          }}
          contentStyle={{
            borderRadius: "14px",
            border: "1px solid #ef4444",
            backgroundColor: "#111827",
            color: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,.25)",
          }}
        />

        {/* Bars */}
        <Bar
          dataKey="images"
          fill="url(#galleryGradient)"
          radius={[0, 14, 14, 0]}
          barSize={28}
        >

          {/* Values on Bar */}
          <LabelList
            dataKey="images"
            position="right"
            style={{
              fill: "#ffffff",
              fontSize: 12,
              fontWeight: 600,
            }}
          />

        </Bar>

      </BarChart>

    </ResponsiveContainer>

  </div>

</div>
</div>

   

    
  );
}