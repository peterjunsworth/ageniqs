'use client';

import { useEffect, useState } from "react";

type Step = {
  kind: 'think' | 'tool' | 'approve' | 'done';
  label: string;
  detail: string;
};

const PROMPT = 'Onboard Acme Corp as a new supplier and get Finance sign-off.';

const STEPS: Step[] = [
  { kind: 'think', label: 'Planning', detail: 'intent: supplier_onboarding · 5 steps' },
  { kind: 'tool', label: 'crm.lookup', detail: '"Acme Corp" → account found' },
  { kind: 'tool', label: 'docs.extract', detail: 'W-9, MSA → 14 fields captured' },
  { kind: 'tool', label: 'policy.check', detail: 'risk score: low · sanctions: clear' },
  { kind: 'approve', label: 'Teams approval', detail: 'sent to Finance channel → approved' },
  { kind: 'done', label: 'Supplier live in ERP', detail: 'completed in 2m 14s' },
];

const STEP_MS = 1100;
const HOLD_MS = 3200;

function StepIcon({ kind, active }: { kind: Step['kind']; active: boolean }) {
  if (active) {
    return (
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute h-5 w-5 rounded-full border-2 border-brand-blue-400/30 border-t-brand-blue-400 animate-spin" />
      </span>
    );
  }
  if (kind === 'done') {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue-500/15 text-brand-blue-300">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </span>
  );
}

export default function AgentConsole() {
  const [typed, setTyped] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(PROMPT.length);
      setStepCount(STEPS.length);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;
    let chars = 0;
    let steps = 0;

    const typeNext = () => {
      chars += 1;
      setTyped(chars);
      timer = chars < PROMPT.length ? setTimeout(typeNext, 28) : setTimeout(runNext, 500);
    };

    const runNext = () => {
      steps += 1;
      setStepCount(steps);
      timer = steps < STEPS.length ? setTimeout(runNext, STEP_MS) : setTimeout(restart, HOLD_MS);
    };

    const restart = () => {
      chars = 0;
      steps = 0;
      setTyped(0);
      setStepCount(0);
      timer = setTimeout(typeNext, 400);
    };

    timer = setTimeout(typeNext, 600);
    return () => clearTimeout(timer);
  }, []);

  const finished = stepCount === STEPS.length;

  return (
    <div className="relative">
      {/* Glow behind the card */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-blue-500/60 via-brand-purple-500/30 to-transparent opacity-70 blur-xl" aria-hidden="true" />

      <div className="relative rounded-2xl border border-white/10 bg-gray-950/80 shadow-2xl backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-gray-500">
            <span className={`h-1.5 w-1.5 rounded-full ${finished ? 'bg-emerald-400' : 'bg-brand-blue-400 animate-pulse'}`} />
            {finished ? 'run complete' : 'agent running'}
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* Prompt */}
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 text-[11px] font-semibold text-gray-300">
              You
            </div>
            <p className="min-h-[3rem] pt-1 text-sm leading-6 text-gray-200">
              {PROMPT.slice(0, typed)}
              {typed < PROMPT.length && (
                <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] bg-brand-blue-400 animate-pulse" />
              )}
            </p>
          </div>

          {/* Agent trace */}
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
              <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
            </div>
            <ol className="relative flex-1 space-y-3 pt-1">
              {STEPS.map((step, i) => {
                const visible = i < stepCount;
                const active = visible && i === stepCount - 1 && !finished;
                return (
                  <li
                    key={step.label}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      visible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                    }`}
                  >
                    <StepIcon kind={step.kind} active={active} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-medium ${
                            step.kind === 'done' ? 'text-emerald-300' : 'text-white'
                          }`}
                        >
                          {step.label}
                        </span>
                        {step.kind === 'tool' && (
                          <span className="rounded border border-white/10 bg-white/5 px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-gray-400">
                            tool
                          </span>
                        )}
                        {step.kind === 'approve' && (
                          <span className="rounded border border-brand-purple-400/30 bg-brand-purple-500/10 px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-brand-purple-300">
                            human-in-loop
                          </span>
                        )}
                      </div>
                      <p className="truncate font-mono text-xs text-gray-500">{step.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px w-full overflow-hidden rounded-b-2xl bg-white/5">
          <div
            className="h-px bg-gradient-brand transition-all duration-700 ease-out"
            style={{ width: `${(stepCount / STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
