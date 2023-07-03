CREATE TABLE "public.to_do_list" (
	"id" serial NOT NULL,
	"task" integer NOT NULL,
	"is_done" BOOLEAN NOT NULL,
	CONSTRAINT "to_do_list_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

--CREATE USER "POCUser" WITH PASSWORD 'senha_super_secreta_do_POC';
--GRANT ALL PRIVILEGES ON TABLE to_do_list TO "POCUser";
--GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "POCUser";

--DATABASE_URL = postgresql://POCUser:senha_super_secreta_do_POC@localhost:5432/POC