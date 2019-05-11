* [Gatekeeper](#gatekeeper)
  * [countVotes](#function-countvotes)
  * [depositVoteTokens](#function-depositvotetokens)
  * [slateRequests](#function-slaterequests)
  * [recommendSlate](#function-recommendslate)
  * [withdrawVoteTokens](#function-withdrawvotetokens)
  * [countRunoffVotes](#function-countrunoffvotes)
  * [withdrawStake](#function-withdrawstake)
  * [revealManyBallots](#function-revealmanyballots)
  * [requestPermission](#function-requestpermission)
  * [voteTokenBalance](#function-votetokenbalance)
  * [contestStatus](#function-conteststatus)
  * [getFirstChoiceVotes](#function-getfirstchoicevotes)
  * [didCommit](#function-didcommit)
  * [requestCount](#function-requestcount)
  * [ballots](#function-ballots)
  * [currentEpochStart](#function-currentepochstart)
  * [currentEpochNumber](#function-currentepochnumber)
  * [stakeTokens](#function-staketokens)
  * [startTime](#function-starttime)
  * [didReveal](#function-didreveal)
  * [batchLength](#function-batchlength)
  * [requests](#function-requests)
  * [getCommitHash](#function-getcommithash)
  * [parameters](#function-parameters)
  * [slateCount](#function-slatecount)
  * [commitBallot](#function-commitballot)
  * [contestSlates](#function-contestslates)
  * [getWinningSlate](#function-getwinningslate)
  * [getSecondChoiceVotes](#function-getsecondchoicevotes)
  * [hasPermission](#function-haspermission)
  * [revealBallot](#function-revealballot)
  * [currentBatchNumber](#function-currentbatchnumber)
  * [donateChallengerStakes](#function-donatechallengerstakes)
  * [token](#function-token)
  * [slates](#function-slates)
  * [PermissionRequested](#event-permissionrequested)
  * [SlateCreated](#event-slatecreated)
  * [SlateStaked](#event-slatestaked)
  * [VotingTokensDeposited](#event-votingtokensdeposited)
  * [VotingTokensWithdrawn](#event-votingtokenswithdrawn)
  * [BallotCommitted](#event-ballotcommitted)
  * [BallotRevealed](#event-ballotrevealed)
  * [ConfidenceVoteCounted](#event-confidencevotecounted)
  * [ConfidenceVoteFinalized](#event-confidencevotefinalized)
  * [ConfidenceVoteFailed](#event-confidencevotefailed)
  * [RunoffStarted](#event-runoffstarted)
  * [RunoffCounted](#event-runoffcounted)
  * [RunoffFinalized](#event-runofffinalized)
  * [StakeWithdrawn](#event-stakewithdrawn)
* [ParameterStore](#parameterstore)
  * [getAsAddress](#function-getasaddress)
  * [get](#function-get)
  * [setInitialValue](#function-setinitialvalue)
  * [getAsUint](#function-getasuint)
  * [params](#function-params)
  * [init](#function-init)
  * [ParameterSet](#event-parameterset)
* [TokenCapacitor](#tokencapacitor)
  * [proposals](#function-proposals)
  * [createManyProposals](#function-createmanyproposals)
  * [donate](#function-donate)
  * [withdrawTokens](#function-withdrawtokens)
  * [createProposal](#function-createproposal)
  * [parameters](#function-parameters)
  * [proposalCount](#function-proposalcount)
  * [ProposalCreated](#event-proposalcreated)
  * [TokensWithdrawn](#event-tokenswithdrawn)
  * [Donation](#event-donation)
* [SafeMath](#safemath)
* [IERC20](#ierc20)
  * [approve](#function-approve)
  * [totalSupply](#function-totalsupply)
  * [transferFrom](#function-transferfrom)
  * [balanceOf](#function-balanceof)
  * [transfer](#function-transfer)
  * [allowance](#function-allowance)
  * [Transfer](#event-transfer)
  * [Approval](#event-approval)

# Gatekeeper


## *function* countVotes

Gatekeeper.countVotes(ballotID, categoryID) `nonpayable` `1364326c`

> Trigger a vote count and update the status of the contest Count the first choice votes for each slate. If a slate has more than 50% of the votes, then it wins and the vote is finalized. Otherwise, wait for a runoff.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *uint256* | categoryID | The category to count votes for |


## *function* depositVoteTokens

Gatekeeper.depositVoteTokens(numTokens) `nonpayable` `14083532`

> Deposit `numToken` tokens into the Gatekeeper to use in voting Assumes that `msg.sender` has approved the Gatekeeper to spend on their behalf

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | numTokens | The number of tokens to devote to voting |


## *function* slateRequests

Gatekeeper.slateRequests(slateID) `view` `1418ceb7`

> Get a list of the requests associated with a slate

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | The slate |


## *function* recommendSlate

Gatekeeper.recommendSlate(batchNumber, categoryID, requestIDs, metadataHash) `nonpayable` `1ee62608`

> Create a new slate with the associated requestIds and metadata hash.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | batchNumber | The batch to submit for |
| *uint256* | categoryID | The category to submit the slate for |
| *uint256[]* | requestIDs | A list of request IDs to include in the slate |
| *bytes* | metadataHash | A reference to metadata about the slate |


## *function* withdrawVoteTokens

Gatekeeper.withdrawVoteTokens(numTokens) `nonpayable` `241b2e42`

> Withdraw `numTokens` vote tokens to the caller and decrease voting power

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | numTokens | The number of tokens to withdraw |


## *function* countRunoffVotes

Gatekeeper.countRunoffVotes(ballotID, categoryID) `nonpayable` `259d1ddb`

> Trigger a runoff count and update the status of the contest Revert if a runoff is not pending. Eliminate all slates but the top two from the confidence vote. Re-count, including the second-choice votes for the top two slates. The slate with the most votes wins. In case of a tie, the earliest slate submitted (slate with the lowest ID) wins.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *uint256* | categoryID | The category to count votes for |


## *function* withdrawStake

Gatekeeper.withdrawStake(slateID) `nonpayable` `25d5971f`

> Withdraw tokens previously staked on a slate that was accepted through slate governance.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | The slate to withdraw the stake from |


## *function* revealManyBallots

Gatekeeper.revealManyBallots(_voters, _ballots, _salts) `nonpayable` `30e581a0`

> Reveal ballots for multiple voters

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address[]* | _voters | undefined |
| *bytes[]* | _ballots | undefined |
| *uint256[]* | _salts | undefined |


## *function* requestPermission

Gatekeeper.requestPermission(metadataHash) `nonpayable` `33a5ae29`

> Request permission to perform the action described in the metadataHash

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *bytes* | metadataHash | A reference to metadata about the action |


## *function* voteTokenBalance

Gatekeeper.voteTokenBalance() `view` `3b930294`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* |  | undefined |


## *function* contestStatus

Gatekeeper.contestStatus(ballotID, categoryID) `view` `43deddf9`

> Return the status of the specified contest

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | undefined |
| *uint256* | categoryID | undefined |


## *function* getFirstChoiceVotes

Gatekeeper.getFirstChoiceVotes(ballotID, categoryID, slateID) `view` `4d2e48de`

> Get the number of first-choice votes cast for the given slate and category

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *uint256* | categoryID | The category |
| *uint256* | slateID | The slate |


## *function* didCommit

Gatekeeper.didCommit(ballotID, voter) `view` `5245766d`

> Return true if the voter has committed for the given ballot

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot to check |
| *address* | voter | The voter's address |


## *function* requestCount

Gatekeeper.requestCount() `view` `5badbe4c`





## *function* ballots

Gatekeeper.ballots() `view` `5c632b38`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* |  | undefined |


## *function* currentEpochStart

Gatekeeper.currentEpochStart() `view` `61a8c8c4`

> Get the start of the current epoch.




## *function* currentEpochNumber

Gatekeeper.currentEpochNumber() `pure` `6903beb4`

> Get the number of the current epoch.




## *function* stakeTokens

Gatekeeper.stakeTokens(slateID) `nonpayable` `7547c7a3`

> Stake tokens on the given slate to include it for consideration in votes. If the slate loses in a contest, the amount staked will go to the winner. If it wins, it will be returned.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | The slate to stake on |


## *function* startTime

Gatekeeper.startTime() `view` `78e97925`





## *function* didReveal

Gatekeeper.didReveal(ballotID, voter) `view` `7b1e4ada`

> Return true if the voter has revealed for the given ballot

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *address* | voter | The voter's address |


## *function* batchLength

Gatekeeper.batchLength() `view` `7cc7719e`





## *function* requests

Gatekeeper.requests() `view` `81d12c58`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* |  | undefined |


## *function* getCommitHash

Gatekeeper.getCommitHash(ballotID, voter) `view` `833a7c46`

> Get the commit hash for a given voter and ballot. Revert if voter has not committed yet.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot to check |
| *address* | voter | The voter's address |


## *function* parameters

Gatekeeper.parameters() `view` `89035730`





## *function* slateCount

Gatekeeper.slateCount() `view` `8fcddad4`





## *function* commitBallot

Gatekeeper.commitBallot(commitHash, numTokens) `nonpayable` `a38e921c`

> Submit a commitment for the current ballot

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *bytes32* | commitHash | The hash representing the voter's vote choices |
| *uint256* | numTokens | The number of vote tokens to use |


## *function* contestSlates

Gatekeeper.contestSlates(ballotID, categoryID) `view` `ae011490`

> Return the IDs of the slates associated with the contest

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | undefined |
| *uint256* | categoryID | undefined |


## *function* getWinningSlate

Gatekeeper.getWinningSlate(ballotID, categoryID) `view` `b62d52d8`

> Return the ID of the winning slate for the given ballot and category Revert if the vote has not been finalized yet.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot of interest |
| *uint256* | categoryID | The category of interest |


## *function* getSecondChoiceVotes

Gatekeeper.getSecondChoiceVotes(ballotID, categoryID, slateID) `view` `b8a50e24`

> Get the number of second-choice votes cast for the given slate and category

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *uint256* | categoryID | The category |
| *uint256* | slateID | The slate |


## *function* hasPermission

Gatekeeper.hasPermission(requestID) `view` `bb58aef6`

> Return true if the requestID has been approved via slate governance

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | requestID | The ID of the request to check |


## *function* revealBallot

Gatekeeper.revealBallot(voter, categories, firstChoices, secondChoices, salt) `nonpayable` `e3ac9c21`

> Reveal a given voter's choices for the current ballot and record their choices

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | voter | The voter's address |
| *uint256[]* | categories | The contests to vote on |
| *uint256[]* | firstChoices | The corresponding first choices |
| *uint256[]* | secondChoices | The corresponding second choices |
| *uint256* | salt | The salt used to generate the original commitment |


## *function* currentBatchNumber

Gatekeeper.currentBatchNumber() `view` `f48fa80b`

> Get the number of the current batch.




## *function* donateChallengerStakes

Gatekeeper.donateChallengerStakes(ballotID, categoryID) `nonpayable` `f59132c2`

> Send tokens of the rejected slates to the token capacitor.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | The ballot |
| *uint256* | categoryID | The category |


## *function* token

Gatekeeper.token() `view` `fc0c546a`





## *function* slates

Gatekeeper.slates() `view` `ff0b48a0`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* |  | undefined |


## *event* PermissionRequested

Gatekeeper.PermissionRequested(requestID, metadataHash) `1b5cd081`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | requestID | not indexed |
| *bytes* | metadataHash | not indexed |

## *event* SlateCreated

Gatekeeper.SlateCreated(slateID, recommender, metadataHash) `3873b613`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | not indexed |
| *address* | recommender | indexed |
| *bytes* | metadataHash | not indexed |

## *event* SlateStaked

Gatekeeper.SlateStaked(slateID, staker, numTokens) `9a2d3eee`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | not indexed |
| *address* | staker | indexed |
| *uint256* | numTokens | not indexed |

## *event* VotingTokensDeposited

Gatekeeper.VotingTokensDeposited(voter, numTokens) `6cbd40fd`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | voter | indexed |
| *uint256* | numTokens | not indexed |

## *event* VotingTokensWithdrawn

Gatekeeper.VotingTokensWithdrawn(voter, numTokens) `5b3e1ece`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | voter | indexed |
| *uint256* | numTokens | not indexed |

## *event* BallotCommitted

Gatekeeper.BallotCommitted(ballotID, voter, numTokens, commitHash) `c6bf4823`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *address* | voter | indexed |
| *uint256* | numTokens | not indexed |
| *bytes32* | commitHash | not indexed |

## *event* BallotRevealed

Gatekeeper.BallotRevealed(ballotID, voter, numTokens) `92aa45cf`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *address* | voter | indexed |
| *uint256* | numTokens | not indexed |

## *event* ConfidenceVoteCounted

Gatekeeper.ConfidenceVoteCounted(ballotID, categoryID, winningSlate, votes, totalVotes) `37fe03a8`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | categoryID | indexed |
| *uint256* | winningSlate | not indexed |
| *uint256* | votes | not indexed |
| *uint256* | totalVotes | not indexed |

## *event* ConfidenceVoteFinalized

Gatekeeper.ConfidenceVoteFinalized(ballotID, categoryID, winningSlate) `6d21223e`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | categoryID | indexed |
| *uint256* | winningSlate | not indexed |

## *event* ConfidenceVoteFailed

Gatekeeper.ConfidenceVoteFailed(ballotID, categoryID) `a9e6b09d`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | categoryID | not indexed |

## *event* RunoffStarted

Gatekeeper.RunoffStarted(ballotID, categoryID, winningSlate, runnerUpSlate) `a764e3fd`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | categoryID | indexed |
| *uint256* | winningSlate | not indexed |
| *uint256* | runnerUpSlate | not indexed |

## *event* RunoffCounted

Gatekeeper.RunoffCounted(ballotID, categoryID, winningSlate, winnerVotes, losingSlate, loserVotes) `594a9a92`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | categoryID | indexed |
| *uint256* | winningSlate | not indexed |
| *uint256* | winnerVotes | not indexed |
| *uint256* | losingSlate | not indexed |
| *uint256* | loserVotes | not indexed |

## *event* RunoffFinalized

Gatekeeper.RunoffFinalized(ballotID, category, winningSlate) `bec9716c`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | ballotID | indexed |
| *uint256* | category | indexed |
| *uint256* | winningSlate | not indexed |

## *event* StakeWithdrawn

Gatekeeper.StakeWithdrawn(slateID, staker, numTokens) `459d5aef`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | slateID | not indexed |
| *address* | staker | indexed |
| *uint256* | numTokens | not indexed |


---
# ParameterStore


## *function* getAsAddress

ParameterStore.getAsAddress(_name) `view` `12caba8d`

> Get the parameter value and cast to `address`

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *string* | _name | The name of the parameter to get the value for |


## *function* get

ParameterStore.get(_name) `view` `693ec85e`

> Get the parameter value associated with the given name.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *string* | _name | The name of the parameter to get the value for |


## *function* setInitialValue

ParameterStore.setInitialValue(_name, _value) `nonpayable` `69815a1b`

> Set a parameter before the ParameterStore has been initialized

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *string* | _name | The name of the parameter to set |
| *bytes32* | _value | The abi-encoded value to assign the parameter |


## *function* getAsUint

ParameterStore.getAsUint(_name) `view` `c5db3742`

> Get the parameter value and cast to `uint256`

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *string* | _name | The name of the parameter to get the value for |


## *function* params

ParameterStore.params() `view` `dc6ab527`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *bytes32* |  | undefined |


## *function* init

ParameterStore.init() `nonpayable` `e1c7392a`

> Initialize the contract, preventing any more changes not made through slate governance




## *event* ParameterSet

ParameterStore.ParameterSet(key, value) `09b2db83`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *bytes32* | key | not indexed |
| *bytes32* | value | not indexed |


---
# TokenCapacitor


## *function* proposals

TokenCapacitor.proposals() `view` `013cf08b`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* |  | undefined |


## *function* createManyProposals

TokenCapacitor.createManyProposals(beneficiaries, tokenAmounts, metadataHashes) `nonpayable` `19e660bf`

> Create multiple proposals to send tokens to beneficiaries.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address[]* | beneficiaries | The accounts to send tokens to |
| *uint256[]* | tokenAmounts | The number of tokens to send to each beneficiary |
| *bytes[]* | metadataHashes | Metadata hashes describing the proposals |


## *function* donate

TokenCapacitor.donate(donor, tokens, metadataHash) `nonpayable` `2ab4bf61`

> Donate tokens on behalf of the given donor. Donor of `address(0)` indicates an unspecified donor.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | donor | The account on behalf of which this donation is being made |
| *uint256* | tokens | The number of tokens to donate |
| *bytes* | metadataHash | A reference to metadata describing the donation |


## *function* withdrawTokens

TokenCapacitor.withdrawTokens(proposalID) `nonpayable` `315a095d`

> Withdraw tokens associated with a proposal and send them to the named beneficiary. The proposal must have been included in an accepted grant slate.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | proposalID | The proposal |


## *function* createProposal

TokenCapacitor.createProposal(to, tokens, metadataHash) `nonpayable` `50eb9321`

> Create a proposal to send tokens to a beneficiary.

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | to | The account to send the tokens to |
| *uint256* | tokens | The number of tokens to send |
| *bytes* | metadataHash | A reference to metadata describing the proposal |


## *function* parameters

TokenCapacitor.parameters() `view` `89035730`





## *function* proposalCount

TokenCapacitor.proposalCount() `view` `da35c664`





## *event* ProposalCreated

TokenCapacitor.ProposalCreated(proposer, requestID, to, tokens, metadataHash) `a87d4e3b`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | proposer | indexed |
| *uint256* | requestID | indexed |
| *address* | to | indexed |
| *uint256* | tokens | not indexed |
| *bytes* | metadataHash | not indexed |

## *event* TokensWithdrawn

TokenCapacitor.TokensWithdrawn(proposalID, to, numTokens) `3f5fbaf8`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | proposalID | not indexed |
| *address* | to | indexed |
| *uint256* | numTokens | not indexed |

## *event* Donation

TokenCapacitor.Donation(payer, donor, numTokens, metadataHash) `e04d63c9`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | payer | indexed |
| *address* | donor | indexed |
| *uint256* | numTokens | not indexed |
| *bytes* | metadataHash | not indexed |


---
# SafeMath


---
# IERC20


## *function* approve

IERC20.approve(spender, value) `nonpayable` `095ea7b3`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | spender | undefined |
| *uint256* | value | undefined |


## *function* totalSupply

IERC20.totalSupply() `view` `18160ddd`





## *function* transferFrom

IERC20.transferFrom(from, to, value) `nonpayable` `23b872dd`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | from | undefined |
| *address* | to | undefined |
| *uint256* | value | undefined |


## *function* balanceOf

IERC20.balanceOf(who) `view` `70a08231`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | who | undefined |


## *function* transfer

IERC20.transfer(to, value) `nonpayable` `a9059cbb`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | to | undefined |
| *uint256* | value | undefined |


## *function* allowance

IERC20.allowance(owner, spender) `view` `dd62ed3e`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | owner | undefined |
| *address* | spender | undefined |

## *event* Transfer

IERC20.Transfer(from, to, value) `ddf252ad`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | from | indexed |
| *address* | to | indexed |
| *uint256* | value | not indexed |

## *event* Approval

IERC20.Approval(owner, spender, value) `8c5be1e5`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | owner | indexed |
| *address* | spender | indexed |
| *uint256* | value | not indexed |


---