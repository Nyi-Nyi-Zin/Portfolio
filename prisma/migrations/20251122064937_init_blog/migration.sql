-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "detail" JSONB NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
