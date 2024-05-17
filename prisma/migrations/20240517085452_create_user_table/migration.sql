-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "image" VARCHAR,
    "access_token" VARCHAR,
    "refresh_token" VARCHAR,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
