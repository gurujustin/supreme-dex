import { ChainId, WAVAX } from '@pangolindex/sdk'
import { SUPREME } from '../../constants'
import { SingleSideStaking } from './hooks'

export const SINGLE_SIDE_STAKING: { [key: string]: SingleSideStaking } = {
  // WAVAX_V0: {
  //   rewardToken: WAVAX[ChainId.AVALANCHE],
  //   conversionRouteHops: [],
  //   stakingRewardAddress: '0x5d705D7c488455c2b8Fa2447e604D7bD098bcC74',
  //   version: 0
  // },
  // DAI_V0: {
  //   rewardToken: DAIe[ChainId.AVALANCHE],
  //   conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
  //   stakingRewardAddress: '0xCbe4BF3311B5293e19c9393932AdB97Ed37DF2cd',
  //   version: 0
  // },
  // USDC_V0: {
  //   rewardToken: SUPREME[ChainId.AVALANCHE],
  //   conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
  //   stakingRewardAddress: '0xd926EA34A9b6e998f1DF27AC821C3Cdd43a0e364',
  //   version: 0
  // },
  // OOE_V0: {
  //   rewardToken: OOE[ChainId.AVALANCHE],
  //   conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
  //   stakingRewardAddress: '0xf0eFf017644680B9878429137ccb2c041b4Fb701',
  //   version: 0
  // },
  // APEIN_V0: {
  //   rewardToken: APEIN[ChainId.AVALANCHE],
  //   conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
  //   stakingRewardAddress: '0xfe1d712363f2B1971818DBA935eEC13Ddea474cc',
  //   version: 0
  // },
  // ORBS_V0: {
  //   rewardToken: ORBS[ChainId.AVALANCHE],
  //   conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
  //   stakingRewardAddress: '0x78d4BFb3b50E5895932073DC5Eb4713eb532941B',
  //   version: 0
  // },
  PNG_V0: {
    rewardToken: SUPREME[ChainId.AVALANCHE],
    conversionRouteHops: [WAVAX[ChainId.AVALANCHE]],
    stakingRewardAddress: '0x6f386e2E37FE871849dB8f322C243C9cc14e0c5D',
    version: 0
  }
}

export const SINGLE_SIDE_STAKING_V0: SingleSideStaking[] = Object.values(SINGLE_SIDE_STAKING).filter(
  staking => staking.version === 0
)
export const SINGLE_SIDE_STAKING_REWARDS_CURRENT_VERSION = Math.max(
  ...Object.values(SINGLE_SIDE_STAKING).map(staking => staking.version)
)

export const SINGLE_SIDE_STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: SingleSideStaking[][]
} = {
  [ChainId.AVALANCHE]: [SINGLE_SIDE_STAKING_V0]
}
