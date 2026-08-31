/* 
개미 군단이 사냥을 나가려고 합니다. 
개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 
장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 
예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 
장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 
사냥감의 체력 hp가 매개변수로 주어질 때, 
사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.
*/

const ANTMILITARY = {
  generalAnts: 5,
  soldierAnts: 3,
  workerAnts: 1,
};

function solution(hp) {
  // 1단계: 장군 개미로 나눠지는 최소 병력 구하기
  // 2단계: 0으로 떨어지지 않는 HP 나머지 변수 선언
  var answer = 0;
  const attackGeneralCount = Math.floor(hp / ANTMILITARY.generalAnts);
  let remainHp = hp - attackGeneralCount * ANTMILITARY.generalAnts;
  answer += attackGeneralCount;

  // 3단계: 병정 개미 최소 병력 구하기
  // 나머지 HP가 3 이거나, 이상일 경우
  // 나머지 HP에서 병정 개미 최소 병력을 차한 값으로 변수 재선언
  if (remainHp >= 3) {
    const attackSoldierCount = Math.floor(remainHp / ANTMILITARY.soldierAnts);
    answer += attackSoldierCount;
    remainHp -= attackSoldierCount * ANTMILITARY.soldierAnts;
  }

  // 4단계: 일개미 최소 병력 구하기
  // 나머지 HP가 1 이거나, 이상일 경우
  if (remainHp >= 1) {
    const attackworkerCount = Math.floor(remainHp / ANTMILITARY.workerAnts);
    answer += attackworkerCount;
  }

  return console.log(answer);
}

solution(999);
