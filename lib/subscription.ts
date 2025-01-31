import { auth } from "@clerk/nextjs/server";

import prismadb from "./prismadb";

const DAY_IN_MS = 86_400_000;

export async function checkSubscription() {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
    where: {
      userId,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  return !!isValid;
}
