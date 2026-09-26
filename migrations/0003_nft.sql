create table if not exists nft_markets (
  id text primary key,
  kind text not null,
  source text not null,
  external_key text not null,
  name text not null,
  image_url text,
  chain text not null default 'ethereum',
  currency text not null default 'ETH',
  description text not null default '',
  floor_native double precision,
  floor_usd double precision,
  chg_24h double precision,
  chg_7d double precision,
  chg_14d double precision,
  chg_30d double precision,
  chg_60d double precision,
  minted double precision,
  supply double precision,
  mint_price double precision,
  open_floor double precision,
  open_minted double precision,
  deadline timestamptz not null,
  volume double precision not null default 0,
  liquidity double precision not null default 400,
  yes_price double precision not null default 0.5,
  no_price double precision not null default 0.5,
  yes_change double precision not null default 0,
  status text not null default 'active',
  outcome text,
  primitive text not null,
  quote_source text not null default 'manual',
  creator_id text,
  created_at timestamptz not null default now(),
  quote_updated_at timestamptz,
  settled_at timestamptz
);

create index if not exists nft_markets_kind_idx on nft_markets (kind, status);

create table if not exists nft_positions (
  id text primary key,
  user_id text not null,
  market_id text not null,
  outcome text not null,
  shares double precision not null,
  avg_price double precision not null,
  settled boolean not null default false
);
create index if not exists nft_positions_user_idx on nft_positions (user_id);
create index if not exists nft_positions_market_idx on nft_positions (market_id);

create table if not exists nft_floor_snaps (
  id serial primary key,
  market_id text not null,
  price double precision not null,
  ts timestamptz not null default now()
);
create index if not exists nft_floor_snaps_idx on nft_floor_snaps (market_id, ts);
