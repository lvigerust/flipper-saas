create extension if not exists "uuid-ossp";

create table public.items(
    id uuid unique default uuid_generate_v4(),
    title text not null,
    buy_price int not null,
    sale_price int,
    user_id uuid references auth.users(id) on delete cascade not null,
    bought_at timestamp with time zone default now() not null,
    sold_at timestamp with time zone,
    primary key (id)
);

alter table public.items enable row level security;

create policy "Users can view own items" on items
    for select to authenticated
        using (auth.uid() = user_id);

create policy "Users can update own items" on items
    for update to authenticated
        using (auth.uid() = user_id);

create policy "Users can delete own items" on items
    for delete to authenticated
        using (auth.uid() = user_id);

