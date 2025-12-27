"use client";

import { useEffect, useMemo, useState } from "react";

import AdminShell from "./_components/AdminShell";
import AdminPageHeader from "./_components/AdminPageHeader";
import AdminSidebar from "./_components/AdminSidebar";
import CreateEventForm from "./_components/CreateEventForm";
import EventsPanel from "./_components/EventsPanel";
import MessagesPanel from "./_components/MessagesPanel";
import OverviewPanel from "./_components/OverviewPanel";

import type { AdminTab, Event, Message } from "./_components/types";

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("overview");

  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
  const [messagesError, setMessagesError] = useState<string>("");

  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState<boolean>(true);
  const [eventsError, setEventsError] = useState<string>("");

  const [selectedMessageId, setSelectedMessageId] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    const loadMessages = async () => {
      try {
        setMessagesLoading(true);
        setMessagesError("");

        const res = await fetch("/api/messages", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load messages (${res.status})`);

        const data = (await res.json()) as Message[];
        if (cancelled) return;

        setMessages(Array.isArray(data) ? data : []);
      } catch (e) {
        if (cancelled) return;
        setMessagesError(
          e instanceof Error ? e.message : "Failed to load messages"
        );
        setMessages([]);
      } finally {
        if (cancelled) return;
        setMessagesLoading(false);
      }
    };

    void loadMessages();
    return () => {
      cancelled = true;
    };
  }, []);

  const refreshEvents = async () => {
    try {
      setEventsLoading(true);
      setEventsError("");

      const res = await fetch("/api/events", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load events (${res.status})`);

      const data = (await res.json()) as Event[];
      setEvents(Array.isArray(data) ? data : []);
    } catch (e) {
      setEventsError(e instanceof Error ? e.message : "Failed to load events");
      setEvents([]);
    } finally {
      setEventsLoading(false);
    }
  };

  useEffect(() => {
    void refreshEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!selectedMessageId && messages.length > 0) {
      setSelectedMessageId(messages[0]?.id ?? "");
    }
  }, [messages, selectedMessageId]);
  const selectedMessage = useMemo(
    () => messages.find((m) => m.id === selectedMessageId) ?? null,
    [messages, selectedMessageId]
  );

  const stats = useMemo(
    () => ({
      totalEvents: events.length,
      publishedEvents: events.filter((e) => e.status === "PUBLISHED").length,
      draftEvents: events.filter((e) => e.status === "DRAFT").length,
      totalMessages: messages.length,
      newMessages: messages.filter((m) => m.status === "NEW").length,
    }),
    [events, messages]
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
            <>
              {eventsError ? (
                <div className="alert alert-danger">{eventsError}</div>
              ) : null}
              <CreateEventForm
                onCreated={() => {
                  void refreshEvents();
                  setTab("events");
                }}
              />
            </>
          ) : tab === "events" ? (
            <EventsPanel
              events={events}
              loading={eventsLoading}
              error={eventsError}
              onRefresh={() => void refreshEvents()}
            />
          ) : (
            <>
              {messagesLoading ? (
                <div className="alert alert-info mb-0">Loading messages...</div>
              ) : messagesError ? (
                <div className="alert alert-danger mb-0">{messagesError}</div>
              ) : messages.length === 0 ? (
                <div className="alert alert-secondary mb-0">
                  No messages yet. Submit the contact form to see messages here.
                </div>
              ) : (
                <MessagesPanel
                  messages={messages}
                  selectedMessageId={selectedMessageId}
                  onSelectMessage={setSelectedMessageId}
                  newMessages={stats.newMessages}
                  selectedMessage={selectedMessage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
