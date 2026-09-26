create table if not exists markets (
  id text primary key,
  title text not null,
  description text not null,
  category text not null,
  image_url text,
  end_date timestamptz not null,
  volume double precision not null default 0,
  liquidity double precision not null default 0,
  yes_price double precision not null default 0.5,
  no_price double precision not null default 0.5,
  yes_change double precision not null default 0,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  creator_id text,
  resolution_source text
);

create table if not exists price_history (
  id serial primary key,
  market_id text not null,
  outcome text not null,
  price double precision not null,
  ts timestamptz not null default now()
);
create index if not exists price_history_market_idx on price_history (market_id, outcome, ts);

create table if not exists comments (
  id text primary key,
  market_id text not null,
  user_id text not null,
  username text not null,
  content text not null,
  created_at timestamptz not null default now()
);
create index if not exists comments_market_idx on comments (market_id, created_at desc);

create table if not exists reactions (
  market_id text not null,
  user_id text not null,
  kind text not null,
  created_at timestamptz not null default now(),
  primary key (market_id, user_id, kind)
);

create table if not exists wallets (
  user_id text primary key,
  address text not null,
  balance double precision not null default 1000,
  faucet_claimed_at timestamptz
);

create table if not exists positions (
  id text primary key,
  user_id text not null,
  market_id text not null,
  market_title text not null,
  outcome text not null,
  shares double precision not null,
  avg_price double precision not null
);
create index if not exists positions_user_idx on positions (user_id);

create table if not exists trades (
  id text primary key,
  user_id text not null,
  market_id text not null,
  market_title text not null,
  outcome text not null,
  side text not null,
  shares double precision not null,
  price double precision not null,
  total double precision not null,
  tx_hash text not null,
  created_at timestamptz not null default now()
);
create index if not exists trades_user_idx on trades (user_id, created_at desc);
create index if not exists trades_market_recent_idx on trades (market_id, created_at desc);

create table if not exists user_stats (
  user_id text primary key,
  username text not null,
  total_volume double precision not null default 0,
  total_profit double precision not null default 0,
  total_trades integer not null default 0,
  wins integer not null default 0,
  streak_days integer not null default 0,
  last_predict_date date,
  best_category text
);

create table if not exists badges (
  user_id text not null,
  badge_id text not null,
  earned_at timestamptz not null default now(),
  primary key (user_id, badge_id)
);

create table if not exists challenges (
  id text primary key,
  title text not null,
  description text not null,
  week_start date not null,
  bonus_ria double precision not null default 50,
  target_trades integer not null default 3
);

create table if not exists challenge_progress (
  challenge_id text not null,
  user_id text not null,
  trades integer not null default 0,
  claimed boolean not null default false,
  primary key (challenge_id, user_id)
);
