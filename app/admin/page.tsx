"use client";

import { useMemo, useState } from "react";

import AdminShell from "./_components/AdminShell";
import AdminPageHeader from "./_components/AdminPageHeader";
import AdminSidebar from "./_components/AdminSidebar";
import CreateEventForm from "./_components/CreateEventForm";
import MessagesPanel from "./_components/MessagesPanel";
import OverviewPanel from "./_components/OverviewPanel";

import type { AdminTab, Message } from "./_components/types";

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("overview");

  const messages = useMemo<Message[]>(
    () => [
      {
        id: "m_001",
        name: "Jane Doe",
        email: "jane@example.com",
        subject: "Partnership inquiry",
        message:
          "Hello, we would like to partner with you on upcoming community programs. Please share more details about your needs and timelines.",
        createdAt: "2025-12-27 14:10",
        status: "new",
      },
      {
        id: "m_002",
        name: "Eric",
        email: "eric@example.com",
        subject: "Volunteer sign-up",
        message:
          "Hi team, I would like to volunteer for your next event. How can I register and what is the schedule?",
        createdAt: "2025-12-26 09:45",
        status: "read",
      },
      {
        id: "m_003",
        name: "Amina",
        email: "amina@example.com",
        subject: "Donation receipt",
        message:
          "I made a donation last week and would like confirmation and a receipt for my records. Thank you.",
        createdAt: "2025-12-25 18:02",
        status: "read",
      },
    ],
    []
  );

  const [selectedMessageId, setSelectedMessageId] = useState<string>(
    messages[0]?.id ?? ""
  );
  const selectedMessage = useMemo(
    () => messages.find((m) => m.id === selectedMessageId) ?? null,
    [messages, selectedMessageId]
  );

  const stats = useMemo(
    () => ({
      totalEvents: 12,
      publishedEvents: 7,
      draftEvents: 5,
      totalMessages: messages.length,
      newMessages: messages.filter((m) => m.status === "new").length,
    }),
    [messages]
  );

  return (
    <AdminShell>
      <div className="row g-4">
        <AdminPageHeader onTabChange={setTab} />

        <AdminSidebar
          tab={tab}
          messagesCount={messages.length}
          onTabChange={setTab}
        />

        <div className="col-12 col-lg-9">
          {tab === "overview" ? (
            <OverviewPanel
              stats={stats}
              messages={messages}
              onOpenMessages={() => setTab("messages")}
              onCreateEvent={() => setTab("create_event")}
              onSelectMessage={setSelectedMessageId}
              onTabChange={setTab}
            />
          ) : tab === "create_event" ? (
            <CreateEventForm />
          ) : (
            <MessagesPanel
              messages={messages}
              selectedMessageId={selectedMessageId}
              onSelectMessage={setSelectedMessageId}
              newMessages={stats.newMessages}
              selectedMessage={selectedMessage}
            />
          )}
        </div>
      </div>
    </AdminShell>
  );
}
