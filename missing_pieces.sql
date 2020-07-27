SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

/*CREATE TABLE*/
CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.game (
  "_id" varchar NOT NULL,
  "name" varchar NOT NULL,
  "years_published" integer,
  "images" varchar,
  "description" varchar,
  "primary_publisher" varchar,
  CONSTRAINT "game_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.collection (
  "_id" serial NOT NULL,
  "game_id" varchar NOT NULL,
  "users_id" bigint NOT NULL,
  CONSTRAINT "collection_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.missing_pieces (
  "_id" serial NOT NULL,
  "type" varchar NOT NULL, 
  "missing_piece" varchar,
  "missing_image" varchar,
  "collection_id" bigint,
  CONSTRAINT "missing_pieces_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



/*ALTER TABLE*/
ALTER TABLE public.collection ADD CONSTRAINT "collection_fk0" FOREIGN KEY ("users_id") REFERENCES public.users("_id");
ALTER TABLE public.collection ADD CONSTRAINT "collection_fk1" FOREIGN KEY ("game_id") REFERENCES  public.game("_id");

ALTER TABLE public.missing_pieces ADD CONSTRAINT "missing_pieces_fk0" FOREIGN KEY ("collection_id") REFERENCES  public.collection("_id");

select setval('public.users__id_seq', 1, false);
select setval('public.missing_pieces__id_seq', 1, false);
select setval('public.collection__id_seq', 1, false);