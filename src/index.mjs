import assert from 'node:assert/strict';
import { israelAdapter, israelTrialBalanceProfile, israelRulePackage } from '@x12i/financial-adapter-il';

assert.equal(israelAdapter.jurisdiction, 'IL');
assert.equal(israelAdapter.validatedLocalFiling, false);
assert.equal(israelAdapter.calendar.yearStartMonth, 10);
assert.equal(israelRulePackage.validatedLocalFiling, false);
assert(israelTrialBalanceProfile.fields.some(field => field.target === 'accountKey.accountId'));
console.log({ calendar: israelAdapter.calendar, layout: israelTrialBalanceProfile.profileId, support: israelRulePackage.supportLevel });
